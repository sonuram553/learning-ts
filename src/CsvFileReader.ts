import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((record) => record.split(","));
  }
}
