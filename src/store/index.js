import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api_banco from './modules/api-banco'
import api_heroku from './modules/api-heroku'
import api_ganaseguros from './modules/api-ganaseguros'
import utils from './modules/utils'


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    api_banco,
    api_heroku,
    api_ganaseguros,
    utils
  }
})
