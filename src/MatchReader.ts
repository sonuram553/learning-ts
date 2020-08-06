import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResults";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];

  static readCsvFile(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

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
