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
    return "Generate a component for a Flux app.";
  }

  /**
   * @override
   */
  get params() {
    return {
      actionModule: "Action module",
      defaultProps: {
        title: "Would you like to set default props?",
        type: "boolean",
        default: false
      },
      defineContext: {
        title: "Would you like to define context for the subcomponents (getChildContext() and childContextTypes)?",
        type: "boolean",
        default: false
      },
      desc: "Component description",
      displayName: "Component display name",
      folder: "Add to subfolder",
      handleStoreChange: {
        title: "Would you like to handle the store change event?",
        type: "boolean",
        default: true
      },
      name: "Component name",
      propTypes: {
        title: "Would you like to set prop types?",
        type: "boolean",
        default: false
      },
      store: "Store to access",
      structType: {
        title: "Structure type",
        choices: ["Simple", "Composite"],
        default: "Simple"
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
    this.list("structType");
    this.input({name: "displayName", default: answers.name});
    this.confirm("defaultProps");
    this.confirm("propTypes");
    this.confirm("defineContext");
    this.confirm("useContext");
    if (this.confirm("handleStoreChange")) {
      this.list({name: "actionModule", choices: ["<none>"].concat(this.getFileNames("app/actions", {ext: false}))});
    } else {
      answers.actionModule = "<none>";
    }
    this.list({name: "store", choices: this.getFileNames("app/stores", {ext: false})});
  }

  /**
   * @override
   */
  generate(answers) {
    const dir = path.join("app/components", answers.folder);
    const file = answers.name + ".jsx";

    if (!this.exists(dir)) this.mkdir(dir);

    this.template(
      `app/components/FluxComponent.jsx`,
      path.join(answers.folder, file),
      answers
    );
  }
}
