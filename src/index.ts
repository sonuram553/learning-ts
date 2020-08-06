import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

//const reader = new MatchReader(new CsvFileReader("football.csv"));
const reader = MatchReader.readCsvFile("football.csv");
reader.load();

//const summary = new Summary(new WinsAnalysis("Liverpool"), new ConsoleReport());
//const summary = new Summary(new WinsAnalysis("Liverpool"), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport("Liverpool");

summary.buildAndPrintReport(reader.matches);
