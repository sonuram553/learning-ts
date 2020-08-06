import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const reader = new MatchReader(new CsvFileReader("football.csv"));
reader.load();

//const summary = new Summary(new WinsAnalysis("Liverpool"), new ConsoleReport());
const summary = new Summary(new WinsAnalysis("Liverpool"), new HtmlReport());

summary.buildAndPrintReport(reader.matches);
