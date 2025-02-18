const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [new Dotenv()],
  // resolve: {
  //   fallback: {
  //     fs: false,
  //     os: false,
  //     path: false,
  //   },
  // },
};
