import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api_banco from './modules/api-banco'
import api_ganatech from './modules/api-ganatech'


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    api_banco,
    api_ganatech
  }
})
