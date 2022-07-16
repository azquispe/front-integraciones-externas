
'use strict'
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "/ganaseguros": {
        target: 'https://msganaseguros.dev.bg.com.bo',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
