import { Request, Response } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  /* @get("/add")
  add(a: number, b: number): number {
    return a + b;
  } */

  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(`
  <form method="POST">
    <div>
      <label>Email<label>
      <input name="email" />
    </div>

    <div>
      <label>Password<label>
      <input name="password" />
    </div>

    <button type="submit">Submit</button>
  </form>
  `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "test@gmail.com" && password === "test") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  logout(req: Request, res: Response) {
    req.session = null;
    res.redirect("/");
  }
}
