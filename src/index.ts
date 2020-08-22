import { UserForm } from "./views/UserForm";
import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UsersList } from "./views/UsersList";
import { Collection } from "./models/Collection";

const rootDiv = document.getElementById("root");
const users = User.buildUserCollection();

/* const user = User.buildUser({ name: "Arun Ram", age: 20 });

if (rootDiv) {
  //const userForm = new UserForm(rootDiv, user);
  //userForm.render();

  const userEdit = new UserEdit(rootDiv, user);
  userEdit.render();
} else throw new Error("Root div not found!"); */

if (rootDiv) {
  const usersList = new UsersList(rootDiv, users);
  usersList.render();
  users.fetch();
} else throw new Error("Root div not found!");
