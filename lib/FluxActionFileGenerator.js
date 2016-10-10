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
    return "Generate an action file.";
  }

  /**
   * @override
   */
  get params() {
    return {
      folder: "Add to subfolder",
      name: "Name"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.list({name: "folder", choices: ["<none>", "<other>"].concat(this.getDirNames("app/actions"))});
    if (answers.folder == "<other>") {
      answers.folder = undefined;
      this.input("folder");
    } else if (answers.folder == "<none>") {
      answers.folder = "/";
    }
    this.input("name");
  }

  /**
   * @override
   */
  generate(answers) {
    const dir = path.join("app/actions", answers.folder);
    const file = answers.name + ".js";

    if (!this.exists(dir)) this.mkdir(dir);
    this.template(
      `app/actions/actionFile.js`,
      path.join(answers.folder, file),
      answers
    );
  }
}
