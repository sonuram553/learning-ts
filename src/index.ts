import { UserForm } from "./views/UserForm";
import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Arun Ram", age: 20 });
const rootDiv = document.getElementById("root");

if (rootDiv) {
  /* const userForm = new UserForm(rootDiv, user);
  userForm.render(); */

  const userEdit = new UserEdit(rootDiv, user);
  userEdit.render();
} else throw new Error("Root div not found!");
