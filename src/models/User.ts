import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  events = new Eventing();
  sync = new Sync<UserProps>("http://localhost:3000/users");

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps) {
    this.data = { ...this.data, ...update };
  }

  fetch() {
    if (this.data.id)
      this.sync.fetch(this.data.id).then((res) => {
        this.set(res.data);
      });
  }

  save() {
    this.sync.save(this.data).then((res) => {
      this.set(res.data);
    });
  }
}
