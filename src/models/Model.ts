import { AxiosPromise } from "axios";

export interface HasId {
  id?: number;
}

type Callback = () => void;

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

export interface ModelAttr<T> {
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttr<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get = this.attributes.get;
  on = this.events.on;
  trigger = this.events.trigger;

  set(update: T) {
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
