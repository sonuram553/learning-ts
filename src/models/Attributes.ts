import { HasId } from "./Model";

export class Attributes<T extends HasId> {
  constructor(private data: T) {}

  getAll(): T {
    return this.data;
  }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T) => {
    this.data = { ...this.data, ...update };
  };
}
