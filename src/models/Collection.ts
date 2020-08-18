import { Eventing } from "./Eventing";
import axios from "axios";

export class Collection<T, R> {
  events = new Eventing();
  models: T[] = [];

  constructor(private baseUrl: string, private deserialize: (json: R) => T) {}

  on = this.events.on;
  trigger = this.events.trigger;

  fetch() {
    axios.get<R[]>(this.baseUrl).then((res) => {
      for (let record of res.data) {
        this.models.push(this.deserialize(record));
      }

      this.trigger("change");
    });
  }
}
