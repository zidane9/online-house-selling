import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'

import AddHouse from './components/AddHouse.vue'
import ListHouse from './components/ListHouse.vue'
import DetailHouse from './components/ListHouse.vue'

// import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/'
  },
  {
    path: '/houses/new',
    component: AddHouse
  },
  {
    path: '/houses',
    component: ListHouse
  },
  {
    path: '/houses/show',
    component: DetailHouse
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
