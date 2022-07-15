import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            //primary: '#6FBF31',
            primary: '#6FBF31',
            
            secondary: '#B7DF98',
            accent: '##D4ECC1',

            verde:'#01827D',
            blanco:'#FFFFFF',
            plomo_oscuro:'#333333',
            plomo_normal:'#868686',
            verde_oscuro:'#01827D',
            plomo_D3D3D3 :'D3D3D3 '
          },
        },
      },
});
