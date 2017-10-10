var webpack = require('webpack');

var config = {
  devServer:{
    contentBase: __dirname + '/src'
  },
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './scripts/main.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
  },
};

module.exports = config;
