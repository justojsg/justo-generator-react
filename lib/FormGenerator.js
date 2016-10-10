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
    return "Generate a form component.";
  }

  /**
   * @override
   */
  get params() {
    return {
      autoComplete: {
        title: "Would you like to set the autoComplete attribute to on?",
        type: "boolean",
        default: false
      },
      defineContext: {
        title: "Would you like to define context for the subcomponents (getChildContext() and childContextTypes)?",
        type: "boolean",
        default: false
      },
      desc: "Component description",
      folder: "Add to subfolder",
      defaultProps: {
        title: "Would you like to set deault props?",
        type: "boolean",
        default: false
      },
      displayName: "Component display name",
      name: "Component name",
      noValidate: {
        title: "Would you like to set the noValidate attribute to true?",
        type: "boolean",
        default: false
      },
      onChange: {
        title: "Would you like to add the onChange attribute?",
        type: "boolean",
        default: true
      },
      preventDefaultOnSubmit: {
        title: "Would you like to cancel the default action on Submit?",
        type: "boolean",
        default: true
      },
      propTypes: {
        title: "Would you like to set prop types?",
        type: "boolean",
        default: false
      },
      useContext: {
        title: "Would you like to use context from some supercomponent (contextTypes)?",
        type: "boolean",
        default: false
      }
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.list({name: "folder", choices: ["<none>", "<other>"].concat(this.getDirNames("app/components"))});

    if (answers.folder == "<other>") {
      answers.folder = undefined;
      this.input("folder");
    } else if (answers.folder == "<none>") {
      answers.folder = "/";
    }

    this.input("name");
    this.input("desc");
    this.input({name: "displayName", default: answers.name});
    this.confirm("defaultProps");
    this.confirm("propTypes");
    this.confirm("defineContext");
    this.confirm("useContext");
    this.confirm("preventDefaultOnSubmit");
    this.confirm("onChange");
    this.confirm("autoComplete");
    this.confirm("noValidate");
  }

  /**
   * @override
   */
  generate(answers) {
    const dir = path.join("app/components", answers.folder);
    const file = answers.name + ".jsx";

    this.template(
      `app/components/FormComponent.jsx`,
      path.join(answers.folder, file),
      answers
    );
  }
}
