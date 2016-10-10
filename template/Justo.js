//imports
const path = require("path");
const justo = require("justo");
const catalog = justo.catalog;
const copy = require("justo-plugin-fs").copy;
const clean = require("justo-plugin-fs").clean;
const eslint = require("justo-plugin-eslint");
const jsonlint = require("justo-plugin-jsonlint");
const browserify = require("justo-plugin-browserify");
const chrome = require("justo-plugin-chrome");
const uglifyjs = require("justo-plugin-uglifyjs");

//catalog
catalog.workflow({name: "build", desc: "Build the package"}, function(params) {
  const ENV = params[0] || process.env.NODE_ENV || "development";

  copy(`Set conf/config.js from conf/${ENV}.js`, {
    src: `app/conf/${ENV}.js`,
    dst: "app/conf/config.js"
  });

  eslint("Best practices and grammar", {
    output: true,
    ext: [".js", ".jsx"],
    src: [
      "app/actions/",
      "app/components/",
      "app/conf/",
      {{#if (eq scope.dataAccess "Dynamically")}}//{{/if}}"app/data/",
      "app/dispatcher/",
      "app/lib/",
      "app/routes/",
      "app/scripts/",
      "app/stores/",
      "app/views/",
      "index.jsx",
      "Justo.js"
    ]
  });

  {{#if (eq scope.dataAccess "Dynamically")}}
  jsonlint("JSON grammar", {
    src: "app/data/"
  });
  {{else}}
  // jsonlint("JSON grammar", {
  //   src: "app/data/"
  // });
  {{/if}}

  clean("Remove dist directory", {
    dirs: ["dist"]
  });

  copy("Copy static content", {
    src: [
      "app/index.html",
      "app/robots.txt",
      "app/sitemap.xml",
      {{#if (eq scope.dataAccess "Statically")}}// {{/if}}"app/data/",
      "app/images/",
      "app/scripts/",
      "app/sitemaps/",
      "app/stylesheets/",
    ],
    dst: "dist/"
  });

  browserify("Bundle React code", {
    src: "app/index.jsx",
    dst: "dist/scripts/react-app.js",
    base: "./",
    debug: (ENV == "development"),
    globals: "insert",
    standalone: "react",
    extensions: [".js", ".json", ".jsx"],
    transform: {
      babelify: {
        presets: ["es2015", "react"]
      }
    }
  });

  uglifyjs("Minify react-app.js", {
    src: "dist/scripts/react-app.js",
    dst: "dist/scripts/react-app.min.js"
  });
});

catalog.workflow({name: "deploy", desc: "Deploy dist to a location."}, function(params) {
  const dst = params[0] || ""; //your default location

  if (dst) {
    copy(`Copy dist to ${dst}`, {
      src: "dist/",
      dst: dst
    });
  }
});

catalog.workflow({name: "chrome", desc: "Open app in Chrome."}, function() {
  chrome.open("Open Chrome", {
    src: path.join(process.cwd(), "dist/index.html"),
    newWindow: true
  });
});

catalog.macro({name: "test", desc: "Unit testing"}, {
  require: "justo-assert",
  src: ["test/unit/index.js", "test/unit/lib/"]
});

catalog.macro({name: "default", desc: "Default task."}, ["build"]);
