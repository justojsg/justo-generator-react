"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _justoGenerator = require("justo-generator");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);








  function _class(opts, responses) {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this,
    Object.assign({}, opts, { mute: true }), responses));
  }_createClass(_class, [{ key: "prompt", value: function prompt(


















































    answers) {
      this.input("name");
      if (this.list("componentType") == "Controlled") {
        if (this.list("componentSubtype") == "Smart") {
          this.confirm("onChange");
          this.input({ name: "selected", default: "{this.state." + answers.name + "}" });
          this.confirm("required");
        } else {
          this.input({ name: "selected", default: "{this.props." + answers.name + "}" });
          this.confirm("readOnly");
        }
      }
      this.confirm("multiple");
    } }, { key: "generate", value: function generate(




    answers) {
      return this.templateAsString("snippets/select.hbs", answers);
    } }, { key: "desc", get: function get() {return "Generate a <select> snippet.";} }, { key: "params", get: function get() {return { componentSubtype: { title: "Type of controlled component", choices: ["Dumb", "Smart"], default: "Smart" }, componentType: { title: "Component type", choices: ["Controlled", "Uncontrolled"] }, name: "Element name", multiple: { title: "Would you like to allow multiple selects by the user?", type: "boolean", default: false }, onChange: { title: "Would you like to add onChange attribute?", type: "boolean", default: false }, readOnly: { title: "Would you like to add readOnly attribute?", type: "boolean", default: false }, required: { title: "Would you like to add the required attribute?", type: "Boolean", default: false }, selected: "Selected" };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;