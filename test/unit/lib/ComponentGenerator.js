//imports
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const dir = require("justo-assert-fs").dir;
const suite = require("justo").suite;
const test = require("justo").test;
const init = require("justo").init;
const fin = require("justo").fin;
const Generator = require("../../../dist/es5/nodejs/justo-generator-react")["component"];

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

    fin({name: "*", title: "Delete dst dir"}, function() {
      DST_DIR.remove();
    });

    suite("Stateful component", function() {
      test("generate(answers) - without lifecycle methods", function() {
        gen.generate({name: "MyTest", type: "Stateful", lifecycleMethods: []});

        file(DST, "app/components/MyTest.jsx").must.exist();
        file(DST, "app/components/MyTest.jsx").must.contain("React.Component");
        file(DST, "app/components/MyTest.jsx").must.not.contain(["componentWillMount", "componentWillReceiveProps", "componentWillUnmount"]);
      });
    });

    test("Stateless component", function() {
      gen.generate({name: "MyTest", type: "Stateless"});

      file(DST, "app/components/MyTest.jsx").must.exist();
      file(DST, "app/components/MyTest.jsx").must.contain("function");
    });
  });
})();
