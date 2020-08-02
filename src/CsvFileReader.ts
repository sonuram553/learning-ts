import fs from "fs";

export abstract class CsvFileReader<T> {
  abstract data: T[];
  abstract filename: string;
  abstract mapRow(row: string[]): T;

  read() {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row) => row.split(","))
      .map(this.mapRow);
  }
}
