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
    return "Generate an <option> snippet.";
  }

  /**
   * @override
   */
  get params() {
    return {
      label: "Text to show",
      value: "Value to submit when selected"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("label");
    this.input("value");
  }

  /**
   * @override
   */
  generate(answers) {
    return this.templateAsString("snippets/option.hbs", answers);
  }
}
