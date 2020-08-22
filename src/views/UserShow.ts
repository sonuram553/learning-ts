import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template() {
    return `
    <div>
        <h1>User Detail</h1>
        <p>User Name: ${this.model.get("name")}</p>
        <p>User Age: ${this.model.get("age")}</p>
    </div>
    `;
  }
}
