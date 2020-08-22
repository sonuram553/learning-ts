import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
      "click:.update-name": this.onUpdateName,
      "click:.save": this.onSaveUser,
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

  onSaveUser = () => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input class="name-input" placeholder="${this.model.get("name")}" />
        <button class="update-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save">Save User</button>
      </div>
      `;
  }
}
