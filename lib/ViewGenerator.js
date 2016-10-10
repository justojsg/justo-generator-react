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
    return "Generate a page view.";
  }

  /**
   * @override
   */
  get params() {
    return {
      desc: "View description",
      folder: "Add to subfolder",
      name: "View name",
      type: {
        title: "View type",
        choices: ["Mutable", "Immutable"],
        default: "Immutable"
      }
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    //folder
    this.list({name: "folder", choices: ["<none>", "<other>"].concat(this.getDirNames("app/views"))});

    if (answers.folder == "<other>") {
      answers.folder = undefined;
      this.input("folder");
    } else if (answers.folder == "<none>") {
      answers.folder = "/";
    }

    this.input("name");
    this.input("desc");
    this.list("type");
  }

  /**
   * @override
   */
  generate(answers) {
    const dir = path.join("app/views", answers.folder);
    const file = answers.name + ".jsx";

    if (!this.exists(dir)) this.mkdir(dir);

    this.template(
      `app/views/PageView.jsx`,
      path.join(answers.folder, file),
      answers
    );
  }
}
