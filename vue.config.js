
'use strict'
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/front-integraciones-externas/'
  : '/'
}


