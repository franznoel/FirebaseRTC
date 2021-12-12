const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
}
