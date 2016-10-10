//import
import {HandlebarsGenerator} from "justo-generator";

/**
 * Generator.
 */
export default class extends HandlebarsGenerator {
  /**
   * @override
   */
  get desc() {
    return "Generate a route file.";
  }

  /**
   * @override
   */
  get params() {
    return {
      indexViewType: {
        title: "Index view type",
        choices: ["Mutable", "Immutable"],
        default: "Mutable"
      },
      layoutViewType: {
        title: "Layout view type",
        choices: ["Mutable", "Immutable"],
        default: "Mutable"
      },
      mountPoint: "Mount point or path",
      name: "File name"
    };
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("name");
    this.input({name: "mountPoint", default: answers.name});
    this.list("layoutViewType");
    this.list("indexViewType");
  }

  /**
   * @override
   */
  generate(answers) {
    const folder = answers.name;

    this.template("app/routes/router.jsx", folder + ".jsx", answers);
    this.append("app/routes/map.jsx", `  {require("./${folder}").default}\n`, {line: -2});
    if (!this.exists("app/views", folder)) this.mkdir("app/views", folder);
    this.template(
      `app/views/LayoutView.jsx`,
      `${folder}/Layout.jsx`,
      {
        folder: folder,
        type: answers.layoutViewType,
        lifecycleMethods: answers.layoutViewLifecycleMethods
      }
    );
    this.template(
      `app/views/IndexView.jsx`,
      `${folder}/Index.jsx`,
      {
        folder: folder,
        type: answers.indexViewType,
        lifecycleMethods: answers.indexViewLifecycleMethods
      }
    );
  }
}
