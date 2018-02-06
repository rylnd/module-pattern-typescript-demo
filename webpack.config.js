const path = require('path');
const sourceDir = path.resolve(__dirname, './src');
const distDir = path.resolve(__dirname, './dist');

module.exports = {
  entry: path.join(sourceDir, 'index.ts'),
  output: {
    path: distDir,
    filename: '[name].dist.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader'],
        include: [sourceDir],
        exclude: ['node_modules']
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
};
