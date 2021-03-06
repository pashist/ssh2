var path = require('path');

module.exports = {
  entry: './lib/client.js',
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2"
  },
  target: 'node'
};