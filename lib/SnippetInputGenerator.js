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
  init() {
    super.init();
    this.registerPartialsFromFolder("snippets/partials/input", "input/");
  }

  /**
   * @override
   */
  get desc() {
    return "Generate an <input> snippet.";
  }

  /**
   * @override
   */
  get params() {
    return {
      autoFocus: {
        title: "Would you like to add the autoFocus attribute?",
        type: "boolean",
        default: false
      },
      checked: "Checked",
      componentSubtype: {
        title: "Type of controlled component",
        choices: ["Dumb", "Smart"],
        default: "Smart"
      },
      componentType: {
        title: "Component type",
        choices: ["Controlled", "Uncontrolled"]
      },
      defaultChecked: "Default checked",
      defaultValue: "Default value",
      label: {
        title: "All in <label>?",
        type: "boolean",
        default: true
      },
      name: "Element name",
      onChange: {
        title: "Would you like to add onChange attribute?",
        type: "boolean",
        default: false
      },
      pattern: "Value pattern",
      placeholder: "Placeholder (user hint text)",
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
      textToShow: "Text to show",
      type: {
        title: "Input type",
        choices: [
          "button",
          "checkbox", "color",
          "date",
          "email",
          "hidden",
          "number",
          "password",
          "radio",
          "reset",
          "search", "submit",
          "text", "time",
          "url"
        ],
        default: "text"
      },
      value: "Value (between \"\" or {})"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.list("type");

    if (["button", "reset", "submit"].indexOf(answers.type) >= 0) {
      this.input({name: "value", title: "Text to show"});
    } else if (["checkbox", "radio"].indexOf(answers.type) >= 0) {
      this.input("name");
      if (answers.type == "radio") this.input({name: "value", title: "Value to submit when selected"});
      this.input("textToShow");
      this.confirm("label");

      if (this.list("componentType") == "Controlled") {
        if (this.list("componentSubtype") == "Smart") {
          this.input({name: "checked", default: `{this.state.${answers.name}}`});
          this.confirm("onChange");
        } else {
          this.input({name: "checked", default: `{this.props.${answers.name}}`});
          this.confirm("readOnly");
        }
      } else {
        this.input({name: "ref", default: answers.name});
        this.input("defaultChecked");
      }
    } else {
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
        this.confirm("onChange");
      }

      if (answers.componentSubtype != "Dumb") {
        this.confirm("autoFocus");
        this.confirm("required");
        this.input("placeholder");

        if (["color", "date", "time"].indexOf(answers.type) < 0) this.input("pattern");
      }
    }
  }

  /**
   * @override
   */
  generate(answers) {
    return this.templateAsString("snippets/input.hbs", answers);
  }
}
