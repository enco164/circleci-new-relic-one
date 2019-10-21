const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    monitor1: './src/monitor-1.js',
    monitor2: './src/monitor-2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
