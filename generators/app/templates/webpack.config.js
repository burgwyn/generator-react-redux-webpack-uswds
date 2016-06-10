var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './index.jsx',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [   
        { 
            test: /\.jsx$/, 
            exclude: /node_modules/, 
            loader: "babel", 
            query:
            {
                presets:['react']
            } 
      }
    ]
  }
};