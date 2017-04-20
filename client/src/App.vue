<template>
<div id="app">
  <div class="layout-logo">Finding you the right home</div>
  <div >
    <img src="http://daftarperumahanmurah.com/assets/9aae334/Rumah-Dijual.jpg" >

  </div>

<div>
<button>
    <router-link to="/houses/new">Add House for Sell</router-link>
</button>

<button @click="initHouses">
    <router-link  to="/houses">List House for Sell</router-link>
</button>
</div>

  <router-view></router-view>

  <!-- <div class="">
    {{$store.state}}
  </div> -->
</div>
</template>

<script>
import { mapActions } from 'vuex'
import ListHouse from './components/ListHouse.vue'

export default{
  name: 'app',
  data(){
    return {
      // types: ['general', 'knock-knock', 'programming'],
      // checkedTypes: ['general', 'knock-knock', 'programming']
    }
  },
  methods: mapActions([
    'initHouses'
  ]),
  components:{
    ListHouse
  }
  // created() {
  //   this.$store.dispatch('initHouses')
  // }
}
</script>
