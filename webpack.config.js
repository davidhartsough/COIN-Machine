const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'coin-machine.js',
    path: path.resolve(__dirname, 'dist')
  }
};
