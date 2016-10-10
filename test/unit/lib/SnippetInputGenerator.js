//imports
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const dir = require("justo-assert-fs").dir;
const suite = require("justo").suite;
const test = require("justo").test;
const init = require("justo").init;
const fin = require("justo").fin;
const Generator = require("../../../dist/es5/nodejs/justo-generator-react")["snippet input"];

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

    suite.only("Buttons", function() {
      test("button", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "button",
          value: "Send",
          cssClass: "send",
          onClick: "{this.handleSendClick}"
        }).must.be.eq(
          "<input type=\"button\" name=\"test\" value=\"Send\" className=\"send\" onClick=\"{this.handleSendClick}\" />\n"
        );
      });

      test("button - overriding form attributes (GET)", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "button",
          value: "Send",
          cssClass: "send",
          onClick: "{this.handleSendClick}",
          formaction: "/form/test",
          formmethod: "get",
          formvalidate: false,
          formtarget: "_blank"
        }).must.be.eq(
          '<input type="button" name="test" value="Send" className="send" onClick="{this.handleSendClick}" formaction="/form/test" formmethod="get" formnovalidate="true" formtarget="_blank" />\n'
        );
      });

      test("button - overriding form attributes (POST)", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "button",
          value: "Send",
          cssClass: "send",
          onClick: "{this.handleSendClick}",
          formaction: "/form/test",
          formmethod: "post",
          formenctype: "text/plain",
          formvalidate: false,
          formtarget: "_blank"
        }).must.be.eq(
          '<input type="button" name="test" value="Send" className="send" onClick="{this.handleSendClick}" formaction="/form/test" formmethod="post" formenctype="text/plain" formnovalidate="true" formtarget="_blank" />\n'
        );
      });

      test("reset", function() {
        gen.generate({
          name: "test",
          type: "reset",
          value: "Reset",
          cssClass: "reset",
          onClick: "{this.handleResetClick}"
        }).must.be.eq(
          "<input type=\"reset\" name=\"test\" value=\"Reset\" className=\"reset\" onClick=\"{this.handleResetClick}\" />\n"
        );
      });

      test("submit", function() {
        gen.generate({
          name: "test",
          type: "submit",
          value: "Send",
          cssClass: "send",
          onClick: "{this.handleSendClick}"
        }).must.be.eq(
          "<input type=\"submit\" name=\"test\" value=\"Send\" className=\"send\" onClick=\"{this.handleSendClick}\" />\n"
        );
      });

      test("submit - overriding form attributes (GET)", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "submit",
          value: "Send",
          cssClass: "send",
          onClick: "{this.handleSendClick}",
          formaction: "/form/test",
          formmethod: "get",
          formvalidate: false,
          formtarget: "_blank"
        }).must.be.eq(
          '<input type="submit" name="test" value="Send" className="send" onClick="{this.handleSendClick}" formaction="/form/test" formmethod="get" formnovalidate="true" formtarget="_blank" />\n'
        );
      });

      test("submit - overriding form attributes (POST)", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "submit",
          value: "Send",
          cssClass: "send",
          onClick: "{this.handleSendClick}",
          formaction: "/form/test",
          formmethod: "post",
          formenctype: "text/plain",
          formvalidate: false,
          formtarget: "_blank"
        }).must.be.eq(
          '<input type="submit" name="test" value="Send" className="send" onClick="{this.handleSendClick}" formaction="/form/test" formmethod="post" formenctype="text/plain" formnovalidate="true" formtarget="_blank" />\n'
        );
      });

      test("Optional attributes", function() {
        gen.generate({
          name: "test",
          type: "button",
          value: "Send"
        }).must.be.eq(
          "<input type=\"button\" name=\"test\" value=\"Send\" />\n"
        );
      });
    });

    suite("Text", function() {
      test("date", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "date",
          label: "Birth date",
          placeholder: "Your birth date",
          cssClass: "date",
          required: true,
          value: "1975/11/18",
          onChange: "{this.handleBirthDateChange}"
        }).must.be.eq(
          "<label>Birth date " +
          "<input type=\"date\" name=\"test\" ref=\"test\" onChange=\"{this.handleBirthDateChange}\" defaultValue=\"1975/11/18\" className=\"date\" placeholder=\"Your birth date\" required=\"true\" />" +
          "</label>\n"
        );
      });

      test("email", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "email",
          label: "Email",
          placeholder: "Your email",
          cssClass: "email",
          required: true,
          value: "elvis@costello.com",
          onChange: "{this.handleEmailChange}",
          pattern: ".+@.+"
        }).must.be.eq(
          "<label>Email " +
          "<input type=\"email\" name=\"test\" ref=\"test\" inputmode=\"email\" onChange=\"{this.handleEmailChange}\" defaultValue=\"elvis@costello.com\" className=\"email\" placeholder=\"Your email\" required=\"true\" pattern=\".+@.+\" />" +
          "</label>\n"
        );
      });

      test("number", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "number",
          label: "A number",
          placeholder: "A random number",
          cssClass: "number",
          required: true,
          value: "123",
          onChange: "{this.handleNumberChange}",
          pattern: "[0-9]+"
        }).must.be.eq(
          "<label>A number " +
          "<input type=\"number\" name=\"test\" ref=\"test\" inputmode=\"numeric\" onChange=\"{this.handleNumberChange}\" defaultValue=\"123\" className=\"number\" placeholder=\"A random number\" required=\"true\" pattern=\"[0-9]+\" />" +
          "</label>\n"
        );
      });

      test("password", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "password",
          label: "Password",
          placeholder: "Your password",
          cssClass: "password",
          required: true,
          value: "my password",
          onChange: "{this.handlePasswordChange}",
          pattern: ".+"
        }).must.be.eq(
          "<label>Password " +
          "<input type=\"password\" name=\"test\" ref=\"test\" onChange=\"{this.handlePasswordChange}\" defaultValue=\"my password\" className=\"password\" placeholder=\"Your password\" required=\"true\" pattern=\".+\" />" +
          "</label>\n"
        );
      });

      test("tel", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "tel",
          label: "Mobile",
          placeholder: "Your mobile",
          cssClass: "mobile",
          required: true,
          value: "636123456",
          onChange: "{this.handleMobileChange}",
          pattern: "[0-9]+"
        }).must.be.eq(
          "<label>Mobile " +
          "<input type=\"tel\" name=\"test\" ref=\"test\" inputmode=\"tel\" onChange=\"{this.handleMobileChange}\" defaultValue=\"636123456\" className=\"mobile\" placeholder=\"Your mobile\" required=\"true\" pattern=\"[0-9]+\" />" +
          "</label>\n"
        );
      });

      test("text", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "text",
          label: "Full name",
          placeholder: "Your full name",
          cssClass: "fullName",
          required: true,
          value: "Costello, Elvis",
          onChange: "{this.handleFullNameChange}",
          pattern: ".+, .+"
        }).must.be.eq(
          "<label>Full name " +
          "<input type=\"text\" name=\"test\" ref=\"test\" onChange=\"{this.handleFullNameChange}\" defaultValue=\"Costello, Elvis\" className=\"fullName\" placeholder=\"Your full name\" required=\"true\" pattern=\".+, .+\" />" +
          "</label>\n"
        );
      });

      test("time", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "time",
          label: "Workload",
          placeholder: "Your workload",
          cssClass: "time",
          required: true,
          value: "01:30",
          onChange: "{this.handleWorkloadChange}"
        }).must.be.eq(
          "<label>Workload " +
          "<input type=\"time\" name=\"test\" ref=\"test\" onChange=\"{this.handleWorkloadChange}\" defaultValue=\"01:30\" className=\"time\" placeholder=\"Your workload\" required=\"true\" />" +
          "</label>\n"
        );
      });

      test("url", function() {
        gen.generate({
          name: "test",
          ref: "test",
          type: "url",
          label: "URL",
          placeholder: "Your web",
          cssClass: "url",
          required: true,
          value: "www.my.com",
          onChange: "{this.handleUrlChange}",
          pattern: ".+\..+"
        }).must.be.eq(
          "<label>URL " +
          "<input type=\"url\" name=\"test\" ref=\"test\" inputmode=\"url\" onChange=\"{this.handleUrlChange}\" defaultValue=\"www.my.com\" className=\"url\" placeholder=\"Your web\" required=\"true\" pattern=\".+\..+\" />" +
          "</label>\n"
        );
      });

      test("Optional attributes", function() {
        gen.generate({
          name: "test",
          type: "text",
        }).must.be.eq(
          "<input type=\"text\" name=\"test\" />\n"
        );
      });
    });

    test("checkbox", function() {
      gen.generate({
        name: "test",
        ref: "test",
        type: "checkbox",
        label: "Programmer?",
        placeholder: "Are you programmer?",
        cssClass: "checkbox",
        required: true,
        value: "programmer",
        onChange: "{this.handleProgrammerChange}"
      }).must.be.eq(
        "<label>" +
        "<input type=\"checkbox\" name=\"test\" ref=\"test\" onChange=\"{this.handleProgrammerChange}\" value=\"programmer\" className=\"checkbox\" placeholder=\"Are you programmer?\" required=\"true\" />" +
        "Programmer?</label>\n"
      );
    });

    test("color", function() {
      gen.generate({
        name: "test",
        ref: "test",
        type: "color",
        label: "Background color",
        placeholder: "The background color",
        cssClass: "color",
        required: true,
        value: "black",
        onChange: "{this.handleBackgroundColorChange}"
      }).must.be.eq(
        "<label>Background color " +
        "<input type=\"color\" name=\"test\" ref=\"test\" onChange=\"{this.handleBackgroundColorChange}\" defaultValue=\"black\" className=\"color\" placeholder=\"The background color\" required=\"true\" />" +
        "</label>\n"
      );
    });

    test("file", function() {
      gen.generate({
        name: "test",
        ref: "test",
        type: "file",
        label: "Picture",
        placeholder: "Your image",
        cssClass: "image",
        required: true,
        value: "me.png",
        onChange: "{this.handleMeChange}",
        accept: "image/*",
        multiple: true
      }).must.be.eq(
        "<label>Picture " +
        "<input type=\"file\" name=\"test\" ref=\"test\" onChange=\"{this.handleMeChange}\" defaultValue=\"me.png\" className=\"image\" placeholder=\"Your image\" required=\"true\" accept=\"image/*\" multiple=\"true\" />" +
        "</label>\n"
      );
    });
  });
})();
