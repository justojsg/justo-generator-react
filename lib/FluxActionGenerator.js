//import
import {HandlebarsGenerator} from "justo-generator";

/**
 * Generator.
 */
export default class extends HandlebarsGenerator {
  /**
   * @override
   */
  get desc() {
    return "Append action to an action file.";
  }

  /**
   * @override
   */
  get params() {
    return {
      creator: "Creator method",
      file: "Action file",
      folder: "Subfolder",
      literal: "Literal name",
      type: "Action type"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.list({name: "folder", choices: ["<none>"].concat(this.getDirNames("app/actions"))});
    if (answers.folder == "<none>") answers.folder = "/";
    this.list({name: "file", choices: this.getFileNames("app/actions/" + answers.folder, {ext: false})});
    this.input("type");
    this.input({name: "literal", default: this.toSnakeCase(answers.type, {case: "upper"})});
    this.input({name: "creator", default: this.toCamelCase(answers.type, {capitalized: "false"})});
  }

  /**
   * @override
   */
  generate(answers) {
    this.append(
      `app/actions/${answers.folder}/${answers.file}.js`,
      this.templateAsString("app/actions/action.hbs", answers),
      {line: -2}
    );
  }
}
