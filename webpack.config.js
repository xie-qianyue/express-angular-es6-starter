module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  // resolve: {
  //   // tells webpack to query these directories for modules
  //   modulesDirectories: ["bower_components"]
  // },  
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/, /bower_components/, /server/], loader: 'babel' },
      { test: /\.html$/, loader: 'raw' },
      // { test: /\.styl$/, loader: 'style!css!stylus' },
      // { test: /\.css$/, loader: 'style!css' }
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
