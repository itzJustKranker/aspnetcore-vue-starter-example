import Vue from 'vue'
import VueRouter from 'vue-router'

// App Views
import CounterExample from 'views/counter-example'
import FetchData from 'views/fetch-data'
import HomePage from 'views/home-page'
import About from 'views/about'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'about', path: '/about', component: About, display: 'About Template', icon: 'info' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Data', icon: 'list' }
]

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})
