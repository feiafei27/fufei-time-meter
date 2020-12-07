var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('./') + '/dist/',
    filename: 'fufei-time-meter.js',
    sourceMapFilename: 'fufei-time-meter.map',
    library: 'fufeiTimeMeter',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
