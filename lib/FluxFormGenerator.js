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
    return "Generate a form component for a Flux app.";
  }

  /**
   * @override
   */
  get params() {
    return {
      actionModule: "Action module",
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
      handleChange: {
        title: "Would you like to handle the input Change event?",
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
      store: "Store to access",
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
    this.confirm("handleChange");
    this.confirm("autoComplete");
    this.confirm("noValidate");
    this.list({name: "actionModule", choices: ["<none>"].concat(this.getFileNames("app/actions", {ext: false}))});
    this.list({name: "store", choices: ["<none>"].concat(this.getFileNames("app/stores", {ext: false}))});
  }

  /**
   * @override
   */
  generate(answers) {
    const dir = path.join("app/components", answers.folder);
    const file = answers.name + ".jsx";

    this.template(
      `app/components/FluxFormComponent.jsx`,
      path.join(answers.folder, file),
      answers
    );
  }
}
