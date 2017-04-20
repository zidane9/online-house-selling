import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import AddHouse from './components/AddHouse.vue'

// import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/houses/new',
    component: AddHouse
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  // store,
  render: h => h(App)
})
