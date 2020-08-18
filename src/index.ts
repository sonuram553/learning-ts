import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Sonu Ram", age: 20 });
const rootDiv = document.getElementById("root");

if (rootDiv) {
  const userForm = new UserForm(rootDiv, user);
  userForm.render();
} else throw new Error("Root div not found!");
