import Vue from 'vue'
import Vuex from 'vuex'

// Store Modules
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
