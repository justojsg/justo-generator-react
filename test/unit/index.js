//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-generator-react");

//suite
suite("index", function() {
  test("default", function() {
    pkg.default.must.be.instanceOf(Function);
  });

  test("component", function() {
    pkg["component"].must.be.instanceOf(Function);
  });

  test("store", function() {
    pkg["store"].must.be.instanceOf(Function);
  });

  test("snippet label", function() {
    pkg["snippet label"].must.be.instanceOf(Function);
  });

  test("snippet input", function() {
    pkg["snippet input"].must.be.instanceOf(Function);
  });

  test("snippet link", function() {
    pkg["snippet link"].must.be.instanceOf(Function);
  });

  test("action", function() {
    pkg["action"].must.be.instanceOf(Function);
  });

  test("view", function() {
    pkg["view"].must.be.instanceOf(Function);
  });

  test("action file", function() {
    pkg["action file"].must.be.instanceOf(Function);
  });

  test("route", function() {
    pkg["route"].must.be.instanceOf(Function);
  });

  test("route file", function() {
    pkg["route file"].must.be.instanceOf(Function);
  });

  test("form", function() {
    pkg["form"].must.be.instanceOf(Function);
  });

  test("snippet select", function() {
    pkg["snippet select"].must.be.instanceOf(Function);
  });

  test("snippet option", function() {
    pkg["snippet option"].must.be.instanceOf(Function);
  });

  test("snippet textarea", function() {
    pkg["snippet textarea"].must.be.instanceOf(Function);
  });

  test("flux", function() {
    pkg["flux"].must.be.instanceOf(Function);
  });

  test("flux component", function() {
    pkg["flux component"].must.be.instanceOf(Function);
  });

  test("flux view", function() {
    pkg["flux view"].must.be.instanceOf(Function);
  });

  test("flux form", function() {
    pkg["flux form"].must.be.instanceOf(Function);
  });
})();
