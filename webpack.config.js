module.exports = {
  context: __dirname + '/app',
  entry: "./js/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        } 
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
