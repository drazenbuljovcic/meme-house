var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractPlugin = require('extract-text-webpack-plugin');
    
module.exports = {
    
  entry: './app/main.ts',
  output: {
    path: '../dist',
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  devServer: { inline: true },
  module: {
    loaders: [
      { 
        test: /\.html$/,
        loader: 'raw'
      },
      { 
        test: /\.css$/,
        loader: 'raw'
      },
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        
        test: /\.scss$/,
        exclude: /styles/,        
        loaders: ['to-string', 'css', 'sass']
      },
      {
        test: /\/styles\/main\.scss$/,        
        loader: ExtractPlugin.extract('style',
           'css-loader!sass')
      },
      {
        test:   /\.(png|gif|jpe?g|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'images/[hash].[ext]'
        }
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file',
        query: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),

    new ExtractPlugin('app.bundle.css'),
  ]
  
}
