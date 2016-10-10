//import
import {HandlebarsGenerator} from "justo-generator";

/**
 * Generator.
 */
export default class extends HandlebarsGenerator {
  /**
   * Constructor.
   */
  constructor(opts, responses) {
    super(Object.assign({}, opts, {mute: true}), responses);
  }

  /**
   * @override
   */
  get desc() {
    return "Generate a <label> snippet.";
  }

  /**
   * @override
   */
  get params() {
    return {
      caption: "Caption",
      htmlFor: "Labeled control ID"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("caption");
    this.input("htmlFor");
  }

  /**
   * @override
   */
  generate(answers) {
    return this.templateAsString("snippets/label.hbs", answers);
  }
}
