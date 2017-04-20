import * as types from './mutation-types'

export const mutations = {
  [types.INIT_HOUSES] (state, payload){
    state.houses = [];
    state.houses.push(...payload)
  },
  [types.ADD_HOUSE] (state, payload){
    state.houses.push(payload)
  },
  [types.UPDATE_HOUSE] (state, payload){
    state.houses = state.houses.map(house => house._id == payload._id ? payload : house)
  },
  [types.REMOVE_HOUSE] (state, payload){
    state.houses = state.houses.filter(house => house._id != payload._id)
  }
}
