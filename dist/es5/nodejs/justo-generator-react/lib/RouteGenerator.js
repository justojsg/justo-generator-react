"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _path = require("path");var _path2 = _interopRequireDefault(_path);
var _justoGenerator = require("justo-generator");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: "prompt", value: function prompt(


























    answers) {
      this.list({ name: "router", choices: this.getFileNames("app/routes", { ext: false }) });
      this.input("path");
      if (answers.router == "map") {
        this.list({ name: "view", choices: this.getFileNames("app/views", { ext: false }) });
      } else {
        this.list({ name: "view", choices: this.getFileNames("app/views/" + answers.router, { ext: false }) });
      }
    } }, { key: "generate", value: function generate(




    answers) {
      this.append(
      _path2.default.join("app/routes", answers.router + ".jsx"),
      "  " + this.templateAsString("app/routes/route.hbs", answers).trim() + "\n",
      { line: -2 });

    } }, { key: "desc", get: function get() {return "Add route to router file.";} }, { key: "params", get: function get() {return { path: "Path", router: "Route file where to add the new path", view: "View to match" };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;