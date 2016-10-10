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
    return "Generate a Link snippet.";
  }

  /**
   * @override
   */
  get params() {
    return {
      title: "Link title",
      path: "Path",
      activeClassName: "CSS active class name",
      type: {
        title: "Link type",
        choices: ["Link", "IndexLink"]
      }
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("title");
    this.input("path");
    this.confirm("activeClassName");
    this.list("type");
  }

  /**
   * @override
   */
  generate(answers) {
    return this.templateAsString("snippets/link.hbs", answers);
  }
}
