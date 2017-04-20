<template lang="html">
<div class="">
  <h5 v-if="$store.state.houses.length > 0">List House for Sell</h5>
  <House v-for="(house, index) in $store.state.houses" :house="house" key="index"></House>
</div>
</template>

<script>
// import { mapActions } from 'vuex'
import House from './House.vue'

export default {

  data(){
    return {

    }
  },
  components:{
    House
  }

}
</script>
