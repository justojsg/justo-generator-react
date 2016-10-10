"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _path = require("path");var _path2 = _interopRequireDefault(_path);
var _justoGenerator = require("justo-generator");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: "prompt", value: function prompt(



























































    answers) {
      this.list({ name: "folder", choices: ["<none>", "<other>"].concat(this.getDirNames("app/components")) });

      if (answers.folder == "<other>") {
        answers.folder = undefined;
        this.input("folder");
      } else if (answers.folder == "<none>") {
        answers.folder = "/";
      }

      this.input("name");
      this.input("desc");
      this.list("structType");
      this.input({ name: "displayName", default: answers.name });
      this.confirm("defaultProps");
      this.confirm("propTypes");
      this.confirm("defineContext");
      this.confirm("useContext");
      if (this.confirm("handleStoreChange")) {
        this.list({ name: "actionModule", choices: ["<none>"].concat(this.getFileNames("app/actions", { ext: false })) });
      } else {
        answers.actionModule = "<none>";
      }
      this.list({ name: "store", choices: this.getFileNames("app/stores", { ext: false }) });
    } }, { key: "generate", value: function generate(




    answers) {
      var dir = _path2.default.join("app/components", answers.folder);
      var file = answers.name + ".jsx";

      if (!this.exists(dir)) this.mkdir(dir);

      this.template("app/components/FluxComponent.jsx",

      _path2.default.join(answers.folder, file),
      answers);

    } }, { key: "desc", get: function get() {return "Generate a component for a Flux app.";} }, { key: "params", get: function get() {return { actionModule: "Action module", defaultProps: { title: "Would you like to set default props?", type: "boolean", default: false }, defineContext: { title: "Would you like to define context for the subcomponents (getChildContext() and childContextTypes)?", type: "boolean", default: false }, desc: "Component description", displayName: "Component display name", folder: "Add to subfolder", handleStoreChange: { title: "Would you like to handle the store change event?", type: "boolean", default: true }, name: "Component name", propTypes: { title: "Would you like to set prop types?", type: "boolean", default: false }, store: "Store to access", structType: { title: "Structure type", choices: ["Simple", "Composite"], default: "Simple" }, useContext: { title: "Would you like to use context from some supercomponent (contextTypes)?", type: "boolean", default: false } };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;