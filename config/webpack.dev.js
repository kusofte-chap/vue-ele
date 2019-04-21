const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8080,
    hot: true,
    publicPath: "/",
    contentBase: _resolve("../src/public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue-ele",
      template: _resolve("../template/index.dev.html")
    })
  ]
});
