//imports
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const dir = require("justo-assert-fs").dir;
const suite = require("justo").suite;
const test = require("justo").test;
const init = require("justo").init;
const fin = require("justo").fin;
const Generator = require("../../../dist/es5/nodejs/justo-generator-react")["snippet link"];

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

    test("generate(answers) - Link without active class name", function() {
      gen.generate({
        type: "Link",
        title: "My link",
        path: "/my/path"
      }).must.be.eq("<Link to=\"/my/path\">My link</Link>\n");
    });

    test("generate(answers) - Link with active class name", function() {
      gen.generate({
        type: "Link",
        title: "My link",
        path: "/my/path",
        activeClassName: "myclass"
      }).must.be.eq("<Link to=\"/my/path\" activeClassName=\"myclass\">My link</Link>\n");
    });

    test("generate(answers) - IndexLink", function() {
      gen.generate({
        type: "IndexLink",
        title: "My link",
        path: "/my/path",
        activeClassName: "myclass"
      }).must.be.eq("<IndexLink to=\"/my/path\" activeClassName=\"myclass\">My link</IndexLink>\n");
    });
  });
})();
