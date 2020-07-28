import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  arrOfChars: string[];

  constructor(private _data: string) {
    super();
    this.arrOfChars = this._data.split("");
  }

  get length(): number {
    return this._data.length;
  }

  get data(): string {
    return this.arrOfChars.join("");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.arrOfChars[leftIndex].toLowerCase() <=
      this.arrOfChars[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.arrOfChars[leftIndex];
    this.arrOfChars[leftIndex] = this.arrOfChars[rightIndex];
    this.arrOfChars[rightIndex] = temp;
  }
}
