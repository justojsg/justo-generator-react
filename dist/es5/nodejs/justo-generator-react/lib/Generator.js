"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _path = require("path");var _path2 = _interopRequireDefault(_path);
var _justoFs = require("justo-fs");var fs = _interopRequireWildcard(_justoFs);
var _justoGenerator = require("justo-generator");function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: "preprompt", value: function preprompt()



































































    {
      if (new fs.Dir(this.dst).hasEntries()) return "Destination dir is not empty.";
    } }, { key: "prompt", value: function prompt(




    answers) {
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
      if (!this.input("git")) this.confirm("gitignore");else
      answers.gitignore = true;
      this.input("bugsUrl");
      this.input("bugsEmail");
      this.input("reactVersion");
      if (this.confirm("reactRouter")) this.list("reactRouterHistory");
      this.input("baseUrl");
      this.input("htmlLang");
      this.checkbox("indexHtmlDependencies");
      this.checkbox("npmDependencies");
      this.list("dataAccess");
    } }, { key: "generate", value: function generate(




    answers) {
      this.mkdir("dist");
      this.copy("_editorconfig", ".editorconfig");
      if (answers.gitignore) this.copy("_gitignore", ".gitignore");
      this.copy("_eslintignore", ".eslintignore");
      this.copy("_eslintrc", ".eslintrc");
      this.template("_package.json", "package.json", answers);
      this.template("Justo.js", answers);
      this.template("README.md", answers);


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
    } }, { key: "desc", get: function get() {return "Generate the React scaffolding.";} }, { key: "params", get: function get() {return { author: "Author name", authorEmail: "Author email", authorHomepage: "Author homepage", baseUrl: "Base URL for the React app (<base>)", contributor: "Contributor name", contributorEmail: "Contributor email", contributorHomepage: "Contributor homepage", dataAccess: { title: "How would you like to access app/data/?", choices: ["Statically", "Dynamically"] }, desc: "App description", indexHtmlDependencies: { title: "Additional index.html dependencies to use", choices: ["Bootstrap", "Font Awesome"] }, npmDependencies: { title: "Additional NPM dependencies to install", choices: ["flux", "lodash", "marked"] }, git: "Git URL", gitignore: "Generate .gitignore?", homepage: "App homepage", htmlLang: "<html lang>", name: { title: "App name", default: _path2.default.basename(process.cwd()) }, bugsUrl: "Bugs URL", bugsEmail: "Bugs email", reactVersion: { title: "React version", default: "*" }, reactRouter: { title: "Would you like to use React Router?", type: "boolean", default: true }, reactRouterHistory: { title: "React Router history to use", choices: ["browserHistory", "hashHistory"], default: "browserHistory" } };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;