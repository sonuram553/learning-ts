import { User } from "../models/User";

export class UserForm {
  constructor(private parent: Element, private model: User) {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
      "click:.update-name": this.onUpdateName,
    };
  }

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap();

    for (let key in eventsMap) {
      const [eventName, selector] = key.split(":");

      fragment.querySelectorAll(selector).forEach((elem) => {
        elem.addEventListener(eventName, eventsMap[key]);
      });
    }
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

  render() {
    this.parent.innerHTML = "";

    const template = document.createElement("template");
    template.innerHTML = this.template();
    this.bindEvents(template.content);

    this.parent.append(template.content);
  }
}
