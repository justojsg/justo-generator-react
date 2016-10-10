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
    return "Generate a <textarea> snippet.";
  }

  /**
   * @override
   */
  get params() {
    return {
      autoFocus: {
        title: "Would you like to add autoFocus attribute?",
        type: "boolean",
        default: false
      },
      componentSubtype: {
        title: "Type of controlled component",
        choices: ["Dumb", "Smart"],
        default: "Smart"
      },
      componentType: {
        title: "Component type",
        choices: ["Controlled", "Uncontrolled"]
      },
      defaultValue: "Default value",
      name: "Element name",
      onChange: {
        title: "Would you like to add onChange attribute?",
        type: "boolean",
        default: false
      },
      placeholder: "Placeholder",
      readOnly: {
        title: "Would you like to add readOnly attribute?",
        type: "boolean",
        default: false
      },
      ref: "Ref",
      required: {
        title: "Would you like to add the required attribute?",
        type: "Boolean",
        default: false
      },
      value: "Value"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("name");

    if (this.list("componentType") == "Controlled") {
      if (this.list("componentSubtype") == "Smart") {
        this.input({name: "value", default: `{this.state.${answers.name}}`});
        this.confirm("onChange");
      } else {
        this.input({name: "value", default: `{this.props.${answers.name}}`});
        this.confirm("readOnly");
      }
    } else {
      this.input({name: "ref", default: answers.name});
      this.input("defaultValue");
    }

    if (answers.componentSubtype != "Dumb") {
      this.confirm("autoFocus");
      this.confirm("required");
      this.input("placeholder");
    }
  }

  /**
   * @override
   */
  generate(answers) {
    return this.templateAsString("snippets/textarea.hbs", answers);
  }
}
