import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#4CAF50',
            secondary: '#81C784',
            accent: '#C8E6C9'
          },
        },
      },
});
