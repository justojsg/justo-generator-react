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
    return "Generate the folders and the files for a Flux app.";
  }

  /**
   * @override
   */
  get params() {
    return {
      confirm: {
        title: "Are you sure?"
      }
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.confirm("confirm");
  }

  /**
   * @override
   */
  generate(answers) {
    this.mkdir("app/actions");
    this.mkdir("app/dispatcher");
    this.copy("app/dispatcher/AppDispatcher.js");
    this.mkdir("app/stores");
  }
}
