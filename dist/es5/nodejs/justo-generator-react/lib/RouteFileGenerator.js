"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _justoGenerator = require("justo-generator");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _class = function (_HandlebarsGenerator) {_inherits(_class, _HandlebarsGenerator);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: "prompt", value: function prompt(



































    answers) {
      this.input("name");
      this.input({ name: "mountPoint", default: answers.name });
      this.list("layoutViewType");
      this.list("indexViewType");
    } }, { key: "generate", value: function generate(




    answers) {
      var folder = answers.name;

      this.template("app/routes/router.jsx", folder + ".jsx", answers);
      this.append("app/routes/map.jsx", "  {require(\"./" + folder + "\").default}\n", { line: -2 });
      if (!this.exists("app/views", folder)) this.mkdir("app/views", folder);
      this.template("app/views/LayoutView.jsx",

      folder + "/Layout.jsx",
      {
        folder: folder,
        type: answers.layoutViewType,
        lifecycleMethods: answers.layoutViewLifecycleMethods });


      this.template("app/views/IndexView.jsx",

      folder + "/Index.jsx",
      {
        folder: folder,
        type: answers.indexViewType,
        lifecycleMethods: answers.indexViewLifecycleMethods });


    } }, { key: "desc", get: function get() {return "Generate a route file.";} }, { key: "params", get: function get() {return { indexViewType: { title: "Index view type", choices: ["Mutable", "Immutable"], default: "Mutable" }, layoutViewType: { title: "Layout view type", choices: ["Mutable", "Immutable"], default: "Mutable" }, mountPoint: "Mount point or path", name: "File name" };} }]);return _class;}(_justoGenerator.HandlebarsGenerator);exports.default = _class;