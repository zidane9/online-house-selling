import * as types from './mutation-types'
import axios from 'axios'
import serverUrl from '../constants'


export const initHouses = ({commit}) => {
  // console.log('-----------x');
  axios.get(`${serverUrl}/houses`)
    .then(function (response) {
      console.log(response.data);
      commit(types.INIT_HOUSES, response.data);
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });
}

export const addHouse = ({commit}, house) => {
  // console.log('----x');
  axios.post(`${serverUrl}/houses`, house)
    .then(function (response) {
      console.log(response.data);
      commit(types.ADD_HOUSE, response.data)
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });
}

export const updateHouse = ({commit}, house) => {
  // console.log('----x');
  axios.put(`${serverUrl}/houses/${house._id}`, house)
    .then(function (response) {
      console.log(response.data);
      commit(types.UPDATE_HOUSE, response.data)
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });
}

export const removeHouse = ({commit}, id) => {
  let isSure = confirm('Are you sure?')
  if(isSure){
  axios.delete(`${serverUrl}/houses/${id}`)
    .then(function (response) {
      console.log(response.data);
      commit(types.REMOVE_HOUSE, id)
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message);
    });
  }
}
