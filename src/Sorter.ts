interface Sortable {
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
  length: number;
}

export class Sorter {
  constructor(public collection: Sortable) {}

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
