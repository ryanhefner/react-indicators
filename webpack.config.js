const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    Canvas: './src/Canvas.js',
    CircleIndicator: './src/CircleIndicator.js',
    BarIndicator: './src/BarIndicator.js',
  },
  output: {
    filename: "dist/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          /node_modules/,
        ],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
  },
  externals: [
    'lodash',
    'react',
    'react-dom',
    'prop-types',
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
