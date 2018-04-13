const path = require('path')
const express = require('express')
const pkg = require('../package')

module.exports = {
  entry: 'src/index.js',
  html: {
    title: pkg.name + ' - ' + pkg.description,
    template: 'template.html',
    inject: false
  },
  port: 4000,
  define: {
    __CINIMATION_VERSION__: pkg.version
  },
  postcss: [require('cssbag')()],
  production: {
    html: false,
    vendor: false
  },
  filename: {
    js: 'cnimation.js',
    css: 'cnimation.css'
  }
}
