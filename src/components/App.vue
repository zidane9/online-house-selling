<template>
<div id="app">
  <div class="layout-logo">Finding you the right home</div>
  <div >
    <img src="http://daftarperumahanmurah.com/assets/9aae334/Rumah-Dijual.jpg">

  </div>


    <router-link to="/houses/new">Add House for Sell</router-link>


  <router-view />

  <!-- <div class="">
    {{$store.state}}
  </div> -->
</div>
</template>

<script>
import { mapActions } from 'vuex'
// import Joke from './Joke.vue'

export default{
  data(){
    return {
      // types: ['general', 'knock-knock', 'programming'],
      // checkedTypes: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    // 'initJokes',
    // 'addJoke'
  ]),
  components:{
    // Joke
  }
}
</script>
