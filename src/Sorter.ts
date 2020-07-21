import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort() {
    const size = this.collection.length;

    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size - 1 - j; i++) {
        if (this.collection.compare(i, i + 1)) continue;
        this.collection.swap(i, i + 1);
      }
    }
  }
}
