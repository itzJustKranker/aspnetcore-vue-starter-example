import Vue from 'vue'
import Vuex from 'vuex'

// Store Modules
import counter from './modules/counter'
import weather from './modules/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    weather
  }
})
