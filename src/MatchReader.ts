import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utils";
import { CsvFileReader } from "./CsvFileReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  data: MatchData[] = [];

  constructor(public filename: string) {
    super();
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult,
      row[6],
    ];
  }
}
