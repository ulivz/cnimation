const path = require('path')
const express = require('express')
const pkg = require('../package')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: 'Cnimation',
    template: 'index.html',
    inject: false
  },
  format: 'umd',
  moduleName: 'cnimation',
  templateCompiler: true,
  port: 5000,
  define: {
    __CINIMATION_VERSION__: pkg.version
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('src'))
    return config
  },
  postcss: [require('cssbag')()],
  devServer: {
    before(app) {
      app.use('/', express.static('docs'))
    }
  },
  production: {
    html: false,
    vendor: false
  },
  filename: {
    js: 'cnimation.js',
    css: 'cnimation.css'
  }
}
