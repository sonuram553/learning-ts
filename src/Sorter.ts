interface Sortable {
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
  length: number;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort() {
    const size = this.length;

    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size - 1 - j; i++) {
        if (this.compare(i, i + 1)) continue;
        this.swap(i, i + 1);
      }
    }
  }
}
