//import
import path from "path";
import * as fs from "justo-fs";
import {HandlebarsGenerator} from "justo-generator";

/**
 * Generator.
 */
export default class extends HandlebarsGenerator {
  /**
   * @override
   */
  get desc() {
    return "Generate the React scaffolding.";
  }

  /**
   * @override
   */
  get params() {
    return {
      author: "Author name",
      authorEmail: "Author email",
      authorHomepage: "Author homepage",
      baseUrl: "Base URL for the React app (<base>)",
      contributor: "Contributor name",
      contributorEmail: "Contributor email",
      contributorHomepage: "Contributor homepage",
      dataAccess: {
        title: "How would you like to access app/data/?",
        choices: ["Statically", "Dynamically"]
      },
      desc: "App description",
      indexHtmlDependencies: {
        title: "Additional index.html dependencies to use",
        choices: ["Bootstrap", "Font Awesome"]
      },
      npmDependencies: {
        title: "Additional NPM dependencies to install",
        choices: ["flux", "lodash", "marked"]
      },
      git: "Git URL",
      gitignore: "Generate .gitignore?",
      homepage: "App homepage",
      htmlLang: "<html lang>",
      name: {
        title: "App name",
        default: path.basename(process.cwd())
      },
      bugsUrl: "Bugs URL",
      bugsEmail: "Bugs email",
      reactVersion: {
        title: "React version",
        default: "*"
      },
      reactRouter: {
        title: "Would you like to use React Router?",
        type: "boolean",
        default: true
      },
      reactRouterHistory: {
        title: "React Router history to use",
        choices: ["browserHistory", "hashHistory"],
        default: "browserHistory"
      }
    };
  }

  /**
   * @override
   */
  preprompt() {
    if ((new fs.Dir(this.dst)).hasEntries()) return "Destination dir is not empty.";
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input("name");
    this.input("desc");
    this.input("homepage");
    if (this.input("author")) {
      this.input("authorEmail");
      this.input("authorHomepage");
    }
    if (this.input("contributor")) {
      this.input("contributorEmail");
      this.input("contributorHomepage");
    }
    if (!this.input("git")) this.confirm("gitignore");
    else answers.gitignore = true;
    this.input("bugsUrl");
    this.input("bugsEmail");
    this.input("reactVersion");
    if (this.confirm("reactRouter")) this.list("reactRouterHistory");
    this.input("baseUrl");
    this.input("htmlLang");
    this.checkbox("indexHtmlDependencies");
    this.checkbox("npmDependencies");
    this.list("dataAccess");
  }

  /**
   * @override
   */
  generate(answers) {
    this.mkdir("dist");
    this.copy("_editorconfig", ".editorconfig");
    if (answers.gitignore) this.copy("_gitignore", ".gitignore");
    this.copy("_eslintignore", ".eslintignore");
    this.copy("_eslintrc", ".eslintrc");
    this.template("_package.json", "package.json", answers);
    this.template("Justo.js", answers);
    this.template("README.md", answers);

    //app
    this.mkdir("app");
    this.mkdir("app/components");
    this.mkdir("app/conf");
    this.copy("app/conf/config.js");
    this.copy("app/conf/development.js");
    this.copy("app/conf/production.js");
    this.mkdir("app/data");
    this.mkdir("app/images");
    this.mkdir("app/lib");
    this.mkdir("app/scripts");
    this.mkdir("app/stylesheets");
    this.copy("app/stylesheets/style.css");
    this.mkdir("app/views");
    this.template("app/index.html", answers);
    this.template("app/index.jsx", answers);
    this.template("app/robots.txt", answers);
    this.template("app/sitemap-index.xml", "sitemap.xml", answers);
    this.mkdir("app/sitemaps");
    this.template("app/sitemaps/site.xml", answers);

    this.template("app/views/App.jsx", answers);
    if (answers.reactRouter) {
      this.copy("app/views/AppIndex.jsx");
      this.mkdir("app/routes");
      this.copy("app/routes/map.jsx");
    }
  }
}
