const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: path.join(__dirname, "/src/main.js"),
  output: {
    path: path.join(__dirname, "/dist/images/"),
    filename: "bundleVue.js",
  },
  module: {
<<<<<<< HEAD
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
=======
    rules: [{
        test: /\.(sa|sc|c)ss$/,
        use: [{
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.vue$/,
<<<<<<< HEAD
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000, // 小于 97kb 将使用 base64
              name: "[name].[ext]",
              esModule: false,
            },
          },
        ],
=======
        use: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "[name].[ext]",
            esModule: false
          },
        }, ],
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
<<<<<<< HEAD
      filename:
        process.env.NODE_ENV === "production" ? "../index.html" : "index.html",
=======
      filename: process.env.NODE_ENV === "production" ? "../index.html" : "index.html",
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
  devServer: {
    port: 4000,
    hot: true,
<<<<<<< HEAD
    clientLogLevel: "none",
  },
}
=======
  },
}
>>>>>>> df85fafd9a353a0404c2a9b21bd832750e7a8584
