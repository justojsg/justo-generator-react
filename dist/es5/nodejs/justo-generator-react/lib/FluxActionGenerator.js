"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _justoGenerator = require("justo-generator");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: "prompt", value: function prompt(




























    answers) {
      this.list({ name: "folder", choices: ["<none>"].concat(this.getDirNames("app/actions")) });
      if (answers.folder == "<none>") answers.folder = "/";
      this.list({ name: "file", choices: this.getFileNames("app/actions/" + answers.folder, { ext: false }) });
      this.input("type");
      this.input({ name: "literal", default: this.toSnakeCase(answers.type, { case: "upper" }) });
      this.input({ name: "creator", default: this.toCamelCase(answers.type, { capitalized: "false" }) });
    } }, { key: "generate", value: function generate(




    answers) {
      this.append("app/actions/" +
      answers.folder + "/" + answers.file + ".js",
      this.templateAsString("app/actions/action.hbs", answers),
      { line: -2 });

    } }, { key: "desc", get: function get() {return "Append action to an action file.";} }, { key: "params", get: function get() {return { creator: "Creator method", file: "Action file", folder: "Subfolder", literal: "Literal name", type: "Action type" };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;