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
    return "Generate a <select> snippet.";
  }

  /**
   * @override
   */
  get params() {
    return {
      componentSubtype: {
        title: "Type of controlled component",
        choices: ["Dumb", "Smart"],
        default: "Smart"
      },
      componentType: {
        title: "Component type",
        choices: ["Controlled", "Uncontrolled"]
      },
      name: "Element name",
      multiple: {
        title: "Would you like to allow multiple selects by the user?",
        type: "boolean",
        default: false
      },
      onChange: {
        title: "Would you like to add onChange attribute?",
        type: "boolean",
        default: false
      },
      readOnly: {
        title: "Would you like to add readOnly attribute?",
        type: "boolean",
        default: false
      },
      required: {
        title: "Would you like to add the required attribute?",
        type: "Boolean",
        default: false
      },
      selected: "Selected"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("name");
    if (this.list("componentType") == "Controlled") {
      if (this.list("componentSubtype") == "Smart") {
        this.confirm("onChange");
        this.input({name: "selected", default: `{this.state.${answers.name}}`});
        this.confirm("required");
      } else {
        this.input({name: "selected", default: `{this.props.${answers.name}}`});
        this.confirm("readOnly");
      }
    }
    this.confirm("multiple");
  }

  /**
   * @override
   */
  generate(answers) {
    return this.templateAsString("snippets/select.hbs", answers);
  }
}
