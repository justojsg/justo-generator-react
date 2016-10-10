"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _get = function get(object, property, receiver) {if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {var parent = Object.getPrototypeOf(object);if (parent === null) {return undefined;} else {return get(parent, property, receiver);}} else if ("value" in desc) {return desc.value;} else {var getter = desc.get;if (getter === undefined) {return undefined;}return getter.call(receiver);}};
var _justoGenerator = require("justo-generator");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);








  function _class(opts, responses) {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this,
    Object.assign({}, opts, { mute: true }), responses));
  }_createClass(_class, [{ key: "init", value: function init()




    {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "init", this).call(this);
      this.registerPartialsFromFolder("snippets/partials/input", "input/");
    } }, { key: "prompt", value: function prompt(
















































































    answers) {
      this.list("type");

      if (["button", "reset", "submit"].indexOf(answers.type) >= 0) {
        this.input({ name: "value", title: "Text to show" });
      } else if (["checkbox", "radio"].indexOf(answers.type) >= 0) {
        this.input("name");
        if (answers.type == "radio") this.input({ name: "value", title: "Value to submit when selected" });
        this.input("textToShow");
        this.confirm("label");

        if (this.list("componentType") == "Controlled") {
          if (this.list("componentSubtype") == "Smart") {
            this.input({ name: "checked", default: "{this.state." + answers.name + "}" });
            this.confirm("onChange");
          } else {
            this.input({ name: "checked", default: "{this.props." + answers.name + "}" });
            this.confirm("readOnly");
          }
        } else {
          this.input({ name: "ref", default: answers.name });
          this.input("defaultChecked");
        }
      } else {
        this.input("name");

        if (this.list("componentType") == "Controlled") {
          if (this.list("componentSubtype") == "Smart") {
            this.input({ name: "value", default: "{this.state." + answers.name + "}" });
            this.confirm("onChange");
          } else {
            this.input({ name: "value", default: "{this.props." + answers.name + "}" });
            this.confirm("readOnly");
          }
        } else {
          this.input({ name: "ref", default: answers.name });
          this.input("defaultValue");
          this.confirm("onChange");
        }

        if (answers.componentSubtype != "Dumb") {
          this.confirm("autoFocus");
          this.confirm("required");
          this.input("placeholder");

          if (["color", "date", "time"].indexOf(answers.type) < 0) this.input("pattern");
        }
      }
    } }, { key: "generate", value: function generate(




    answers) {
      return this.templateAsString("snippets/input.hbs", answers);
    } }, { key: "desc", get: function get() {return "Generate an <input> snippet.";} }, { key: "params", get: function get() {return { autoFocus: { title: "Would you like to add the autoFocus attribute?", type: "boolean", default: false }, checked: "Checked", componentSubtype: { title: "Type of controlled component", choices: ["Dumb", "Smart"], default: "Smart" }, componentType: { title: "Component type", choices: ["Controlled", "Uncontrolled"] }, defaultChecked: "Default checked", defaultValue: "Default value", label: { title: "All in <label>?", type: "boolean", default: true }, name: "Element name", onChange: { title: "Would you like to add onChange attribute?", type: "boolean", default: false }, pattern: "Value pattern", placeholder: "Placeholder (user hint text)", readOnly: { title: "Would you like to add readOnly attribute?", type: "boolean", default: false }, ref: "Ref", required: { title: "Would you like to add the required attribute?", type: "Boolean", default: false }, textToShow: "Text to show", type: { title: "Input type", choices: ["button", "checkbox", "color", "date", "email", "hidden", "number", "password", "radio", "reset", "search", "submit", "text", "time", "url"], default: "text" }, value: "Value (between \"\" or {})" };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;