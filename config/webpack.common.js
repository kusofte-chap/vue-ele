const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: {
    app: _resolve("../src/main.js")
  },
  output: {
    path: _resolve("../public/js"),
    filename: "[name].bunlde.js"
  },
  resolve: {
    extensions: [".js", ".vue", ".less", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: _resolve("../src"),
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss|sass|less)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()]
};
