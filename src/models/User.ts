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
}
