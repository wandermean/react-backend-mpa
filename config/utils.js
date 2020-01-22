const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const PAGE_PATH = path.resolve(
  __dirname,
  `../src/projects/${process.argv[2]}/pages`
);
const paths = require("./paths");

exports.entries = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === "development";
  let entryFiles = glob.sync(PAGE_PATH + "/*/index.js");
  let map = {};
  entryFiles.forEach(filePath => {
    let filename = filePath.substring(
      filePath.indexOf("/pages") + 7,
      filePath.lastIndexOf("/index")
    );
    // console.log(resolveModule(resolveApp, `src/projects/${process.argv[2]}/index`))
    map[filename] = isEnvDevelopment
      ? [
          require.resolve("react-dev-utils/webpackHotDevClient"),
          filePath
        ].filter(Boolean)
      : [filePath];
  });
  return map;
};

exports.htmlPlugin = function(webpackEnv) {
  const isEnvProduction = webpackEnv === "production";
  let entryFiles = glob.sync(PAGE_PATH + "/*/index.js");
  let arr = [];
  entryFiles.forEach(filePath => {
    let obj = { inject: true, template: paths.appHtml };
    let conf = {};
    let filename = filePath.substring(
      filePath.indexOf("/pages") + 7,
      filePath.lastIndexOf("/index")
    );
    obj.chunks = [filename];
    obj.filename = `${filename}.html`;
    conf = Object.assign(
      {},
      obj,
      isEnvProduction
        ? {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            }
          }
        : undefined
    );
    arr.push(new HtmlWebpackPlugin(conf));
  });

  return arr;
};
