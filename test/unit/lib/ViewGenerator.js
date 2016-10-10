//imports
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const dir = require("justo-assert-fs").dir;
const suite = require("justo").suite;
const test = require("justo").test;
const init = require("justo").init;
const fin = require("justo").fin;
const Generator = require("../../../dist/es5/nodejs/justo-generator-react")["view"];

//suite
suite("Generator", function() {
  suite("#constructor()", function() {
    test("constructor()", function() {
      var gen = new Generator({});
      gen.must.be.instanceOf(Generator);
    });
  });

  suite("#generate()", function() {
    var gen, DST_DIR, DST;

    init({name: "*", title: "Create tmp dir and generator"}, function() {
      DST_DIR = Dir.createTmpDir();
      DST = DST_DIR.path;
      gen = new Generator({mute: true, src: "dist/es5/nodejs/justo-generator-react/template", dst: DST}, {});
    });

    fin({name: "*", title: "Delete tmp dir"}, function() {
      DST_DIR.remove();
    });

    test("generate(answers) - without lifecycle methods", function() {
      gen.generate({name: "MyView", displayName: "MyViewD", desc: "My desc.", lifecycleMethods: []});
      file(DST, "app/views/MyView.jsx").must.exist();
      file(DST, "app/views/MyView.jsx").must.not.contain(["componentWillMount", "componentWillReceiveProps", "componentWillUnmount"]);
    });

    test("generate(answers) - with mount lifecycle methods", function() {
      gen.generate({name: "MyView", displayName: "MyViewD", desc: "My desc.", lifecycleMethods: ["mount"]});
      file(DST, "app/views/MyView.jsx").must.exist();
      file(DST, "app/views/MyView.jsx").must.contain(["componentWillMount", "componentDidMount"]);
      file(DST, "app/views/MyView.jsx").must.not.contain(["componentWillReceiveProps", "componentWillUnmount"]);
    });

    test("generate(answers) - with update lifecycle methods", function() {
      gen.generate({name: "MyView", displayName: "MyViewD", desc: "My desc.", lifecycleMethods: ["update"]});
      file(DST, "app/views/MyView.jsx").must.exist();
      file(DST, "app/views/MyView.jsx").must.contain(["componentWillReceiveProps", "shouldComponentUpdate", "componentWillUpdate", "componentDidUpdate"]);
      file(DST, "app/views/MyView.jsx").must.not.contain(["componentWillMount", "componentWillUnmount"]);
    });

    test("generate(answers) - with unmount lifecycle methods", function() {
      gen.generate({name: "MyView", displayName: "MyViewD", desc: "My desc.", lifecycleMethods: ["unmount"]});
      file(DST, "app/views/MyView.jsx").must.exist();
      file(DST, "app/views/MyView.jsx").must.contain(["componentWillUnmount"]);
      file(DST, "app/views/MyView.jsx").must.not.contain(["componentWillMount", "componentWillReceiveProps"]);
    });
  });
})();
