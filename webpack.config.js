const Webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/app.jsx',
  output: {
    path: './public',
    filename: 'resistance.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['flow', 'es2015', 'react'],
          plugins: [
            'syntax-trailing-function-commas',
            'transform-react-display-name',
            'transform-class-properties',
            'transform-es2015-destructuring',
            'transform-object-rest-spread'
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './client/style')],
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  }
};
