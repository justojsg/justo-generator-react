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
    return "Generate a component.";
  }

  /**
   * @override
   */
  get params() {
    return {
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
      handleChange: {
        title: "Would you like to define <input> Change handler?",
        type: "boolean",
        default: false
      },
      implType: {
        title: "Implementation type",
        choices: ["Function", "Class"]
      },
      name: "Component name",
      propTypes: {
        title: "Would you like to set prop types?",
        type: "boolean",
        default: false
      },
      structType: {
        title: "Structure type",
        choices: ["Simple", "Composite"],
        default: "Simple"
      },
      type: {
        title: "Component type",
        choices: ["Mutable", "Immutable"],
        default: "Immutable"
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

    this.list("type");
    this.list("structType");

    if (answers.type == "Immutable") this.list("implType");
    else answers.implType = "Class";

    if (answers.implType == "Class") {
      this.input({name: "displayName", default: answers.name});
      this.confirm("defaultProps");
      this.confirm("propTypes");
      this.confirm("defineContext");
      this.confirm("useContext");
      if (answers.type == "Mutable") this.confirm("handleChange");
    }
  }

  /**
   * @override
   */
  generate(answers) {
    const dir = path.join("app/components", answers.folder);
    const file = answers.name + ".jsx";

    if (!this.exists(dir)) this.mkdir(dir);

    this.template(
      `app/components/${answers.implType}Component.jsx`,
      path.join(answers.folder, file),
      answers
    );
  }
}
