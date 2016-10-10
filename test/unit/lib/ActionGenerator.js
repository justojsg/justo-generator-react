//imports
const path = require("path");
const File = require("justo-fs").File;
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const dir = require("justo-assert-fs").dir;
const suite = require("justo").suite;
const test = require("justo").test;
const init = require("justo").init;
const fin = require("justo").fin;
const Generator = require("../../../dist/es5/nodejs/justo-generator-react")["action"];

//suite
suite("Generator", function() {
  const SRC = "test/unit/data";

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

    init({name: "*", title: "Generate actions file"}, function() {
      (new File(SRC, "app/actions/actions.js")).copyTo(DST, "app/actions/actions.js");
    });

    fin({name: "*", title: "Delete tmp dir"}, function() {
      DST_DIR.remove();
    });

    test("generate(answers)", function() {
      gen.generate({file: "actions.js", name: "my-test", literal: "MY_TEST", creator: "myTest"});
      file(DST, "app/actions/actions.js").must.exist();
      file(DST, "app/actions/actions.js").must.contain([
        "MY_TEST: \"my-test\"",
        "myTest(data) {"
      ]);
    });
  });
})();
