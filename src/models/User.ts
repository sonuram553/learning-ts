import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  events = new Eventing();
  sync = new Sync<UserProps>("http://localhost:3000/users");
  attributes: Attributes<UserProps>;

  constructor(user: UserProps) {
    this.attributes = new Attributes(user);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(update: UserProps) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch() {
    const id = this.get("id");
    if (typeof id !== "number") throw new Error("Cannot fetch without an id!");

    this.sync.fetch(id).then((res) => {
      this.set(res.data);
    });
  }

  save() {
    const user = this.attributes.getAll();
    this.sync
      .save(user)
      .then((res) => {
        this.trigger("save");
      })
      .catch((err) => {
        this.trigger("error");
      });
  }
}
