import Vue from 'vue'   // in Vue 2
import axios from 'axios'
import VueAxios from 'vue-axios'
//const baseURL  = 'https://localhost:9000/api/';
const baseURL  = 'https://springboot-firmador-heroku.herokuapp.com/api/firma';
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);