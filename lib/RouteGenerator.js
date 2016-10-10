//import
import path from "path";
import {HandlebarsGenerator} from "justo-generator";

/**
 * Generator.
 */
export default class extends HandlebarsGenerator {
  /**
   * @override
   */
  get desc() {
    return "Add route to router file.";
  }

  /**
   * @override
   */
  get params() {
    return {
      path: "Path",
      router: "Route file where to add the new path",
      view: "View to match"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.list({name: "router", choices: this.getFileNames("app/routes", {ext: false})});
    this.input("path");
    if (answers.router == "map") {
      this.list({name: "view", choices: this.getFileNames(`app/views`, {ext: false})});
    } else {
      this.list({name: "view", choices: this.getFileNames(`app/views/${answers.router}`, {ext: false})});
    }
  }

  /**
   * @override
   */
  generate(answers) {
    this.append(
      path.join("app/routes", answers.router + ".jsx"),
      "  " + this.templateAsString("app/routes/route.hbs", answers).trim() + "\n",
      {line: -2}
    );
  }
}
