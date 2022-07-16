
'use strict'
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:'https://msganaseguros.dev.bg.com.bo',
     /*proxy: {
          "^/ganaseguros": {
          //target: 'https://msganaseguros.dev.bg.com.bo',
          target: `http://${METADATA.host}:${METADATA.nestPort}`,
          ws: true,
          changeOrigin: true
        }
      }*/
  }
}
