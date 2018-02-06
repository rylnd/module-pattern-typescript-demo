const path = require('path');
const sourceDir = path.resolve(__dirname, './src');
const distDir = path.resolve(__dirname, './dist');

module.exports = {
  entry: path.join(sourceDir, 'index.js'),
  output: {
    path: distDir,
    filename: '[name].dist.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
