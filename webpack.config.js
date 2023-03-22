const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './client/index.js',

  output :{
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },

  plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
  })],

  devServer: {
      proxy: {
        '/api/recipe': 'http://localhost:3000'
      },
  },

  mode: process.env.NODE_ENV,

  module: {
    rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/env', { targets: "defaults" }],
                    ['@babel/react', { targets: "defaults" }],
                ]
            }
          }
        },

        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ]
        }
    ]
  }

  
};