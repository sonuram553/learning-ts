import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler, Request, Response, NextFunction } from "express";

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(400).send("Invalid request!");
      return;
    }

    for (let key of keys) {
      if (req.body[key] === undefined) {
        res.status(400).send(`Invalid request: Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

export const router = AppRouter.getInstance();

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );
      const validate =
        Reflect.getMetadata(MetadataKeys.Validate, target.prototype, key) || [];
      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middlewares, target.prototype, key) ||
        [];

      middlewares.push(bodyValidator(validate));

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
