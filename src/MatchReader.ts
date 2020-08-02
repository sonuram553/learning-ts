import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map((record) => {
      return [
        dateStringToDate(record[0]),
        record[1],
        record[2],
        +record[3],
        +record[4],
        record[5] as MatchResult,
        record[6],
      ];
    });
  }
}
