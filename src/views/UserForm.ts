import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
      "click:.update-name": this.onUpdateName,
    };
  }

  onSetAge = () => {
    this.model.setRandomAge();
  };

  onUpdateName = () => {
    const nameInput = this.parent.querySelector(".name-input");
    if (nameInput instanceof HTMLInputElement)
      this.model.set({ name: nameInput.value });
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <input class="name-input" />
        <button class="update-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
      `;
  }
}
