import { controller, get, use } from "./decorators";
import { Request, Response, NextFunction } from "express";

@controller("")
class RootController {
  @get("/")
  home(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
    <div>
        <p>You are logged in.</p>
        <a href='/auth/logout'>Logout</a>
    </div>
    `);
      return;
    }

    res.send(`
    <div>
        <p>You are not logged in.</p>
        <a href='/auth/login'>Login</a>
    </div>
    `);
  }

  @get("/protected")
  @use(requireAuth)
  protected(req: Request, res: Response) {
    res.send("Welcome to protected route.");
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("You are not permitted!!");
}
