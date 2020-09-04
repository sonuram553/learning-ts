import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RequestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RequestHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.Get);
export const post = routeBinder(Methods.Post);
