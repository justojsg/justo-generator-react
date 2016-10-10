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
    return "Generate a store class.";
  }

  /**
   * @override
   */
  get params() {
    return {
      actionModule: "Action module",
      dataAccess: {
        title: "How would you like to access the data source?",
        choices: ["http", "request", "<another>"],
        default: "<another>"
      },
      desc: "Store description",
      name: "Store class name",
      readOnly: {
        title: "Is read-only?",
        type: "boolean",
        default: false
      }
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("name");
    this.input("desc");
    if (this.confirm("readOnly")) answers.actionModule = "<none>";
    else this.list({name: "actionModule", choices: ["<none>"].concat(this.getFileNames("app/actions", {ext: false}))});
    this.list("dataAccess");
  }

  /**
   * @override
   */
  generate(answers) {
    this.template("app/stores/Store.js", answers.name + ".js", answers);
  }
}
