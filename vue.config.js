module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:'https://msganaseguros.dev.bg.com.bo/'
     /*proxy: {
          "^/ganaseguros": {
          target: 'https://msganaseguros.dev.bg.com.bo',
          ws: true,
          changeOrigin: true
        }
      }*/
  }
}
