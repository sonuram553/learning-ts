import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("You are not permitted!!");
}

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "test@gmail.com" && password === "test") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
  <div>
    <p>You are logged in.</p>
    <a href='/logout'>Logout</a>
  </div>
  `);
    return;
  }

  res.send(`
  <div>
    <p>You are not logged in.</p>
    <a href='/login'>Login</a>
  </div>
  `);
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route.");
});

export { router };
