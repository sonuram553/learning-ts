import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResults";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(private team: string) {}

  run(matches: MatchData[]): string {
    let winsCount = 0;

    for (let match of matches) {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      )
        winsCount++;
    }

    return `${this.team} won ${winsCount} games.`;
  }
}
