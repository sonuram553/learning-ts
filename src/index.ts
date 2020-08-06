import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();

const summary = new Summary(new WinsAnalysis("Liverpool"), new ConsoleReport());

summary.buildAndPrintReport(reader.matches);
