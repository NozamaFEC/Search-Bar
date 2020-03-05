var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      
      },
      {
        test: [/\.css$/i],
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // resolve: {
  //   extensions: ['*', '.js', '.jsx', '.css']
  // }
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  devServer:{
    contentBase: './client/dist'
  }

};