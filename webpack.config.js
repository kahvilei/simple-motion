const path = require('path');

module.exports = {
  entry: './src/animation/index.js',
  mode: "production",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/site'),
  },
};