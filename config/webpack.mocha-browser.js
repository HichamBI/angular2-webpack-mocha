var helpers = require('./helpers');

module.exports = {
  devtool: 'cheap-module-source-map',

   entry: {
       'test': 'mocha!./mocha-browser-entry-file.js'
   },

    output: {
        path: helpers.root('tests'),
        filename: 'test.bundle.js',
        publicPath: 'http://localhost:9090/tests'
    },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  }
};
