import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  houses: []
  // newHouse: {
  //   title: '',
  //   description: '',
  //   price: '',
  //   image: '',
  //   owner: '',
  //   phone: '',
  //   address: ''
  // }
}

// const getters = {
//   getNewHouse: state => state.newHouse,
//   getHouses: state => state.houses
// }

export default new Vuex.Store({
  state,
  mutations,
  actions
  // getters
})
