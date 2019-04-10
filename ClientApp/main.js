import Vue from 'vue'
import axios from 'axios'
import VueTables from 'vue-tables-2'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'
import App from './App'
import { FontAwesomeIcon } from './icons'

// Registration of global components
Vue.component('icon', FontAwesomeIcon)
Vue.use(VueTables.ClientTable)
Vue.prototype.$http = axios

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}
