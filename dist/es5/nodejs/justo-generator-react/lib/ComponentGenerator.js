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

      this.list("type");
      this.list("structType");

      if (answers.type == "Immutable") this.list("implType");else
      answers.implType = "Class";

      if (answers.implType == "Class") {
        this.input({ name: "displayName", default: answers.name });
        this.confirm("defaultProps");
        this.confirm("propTypes");
        this.confirm("defineContext");
        this.confirm("useContext");
        if (answers.type == "Mutable") this.confirm("handleChange");
      }
    } }, { key: "generate", value: function generate(




    answers) {
      var dir = _path2.default.join("app/components", answers.folder);
      var file = answers.name + ".jsx";

      if (!this.exists(dir)) this.mkdir(dir);

      this.template("app/components/" +
      answers.implType + "Component.jsx",
      _path2.default.join(answers.folder, file),
      answers);

    } }, { key: "desc", get: function get() {return "Generate a component.";} }, { key: "params", get: function get() {return { defaultProps: { title: "Would you like to set default props?", type: "boolean", default: false }, defineContext: { title: "Would you like to define context for the subcomponents (getChildContext() and childContextTypes)?", type: "boolean", default: false }, desc: "Component description", displayName: "Component display name", folder: "Add to subfolder", handleChange: { title: "Would you like to define <input> Change handler?", type: "boolean", default: false }, implType: { title: "Implementation type", choices: ["Function", "Class"] }, name: "Component name", propTypes: { title: "Would you like to set prop types?", type: "boolean", default: false }, structType: { title: "Structure type", choices: ["Simple", "Composite"], default: "Simple" }, type: { title: "Component type", choices: ["Mutable", "Immutable"], default: "Immutable" }, useContext: { title: "Would you like to use context from some supercomponent (contextTypes)?", type: "boolean", default: false } };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;