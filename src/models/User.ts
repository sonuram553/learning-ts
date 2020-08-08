import axios from "axios";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

interface Events {
  [key: string]: Callback[];
}

type Callback = () => void;

export class User {
  private events: Events = {};

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps) {
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string) {
    const handlers = this.events[eventName] || [];
    for (let callback of handlers) {
      callback();
    }
  }

  fetch() {
    axios.get(`http://localhost:3000/users/${this.data.id}`).then((res) => {
      this.set(res.data);
    });
  }

  save() {
    if (this.data.id) {
      axios.put(`http://localhost:3000/users/${this.data.id}`, this.data);
      return;
    }

    axios.post(`http://localhost:3000/users`, this.data);
  }
}
