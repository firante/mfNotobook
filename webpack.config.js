'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: './dev/index.js',
  output: {
    filename: './prod/build.js',
    library: 'mf'
  },
  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 200,
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-sourse-map' : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
          presets: ['es2015']
        }
    }],

    resolve: {
     extensions: ['.js']
   }
  }
};

if(NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      }
    })
  );
}
