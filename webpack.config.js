module.exports = {
  entry: "./src/js/",
  output: {
    path: __dirname + '/www/js/dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules\/|bower_components\/)/,
      loader: 'babel?presets[]=es2015'
    }]
  }
};
