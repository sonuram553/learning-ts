import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string) {
    const html = `
      <div>
        <h1>${report}</h1>
      </div>
      `;

    fs.writeFileSync("report.html", html);
  }
}
