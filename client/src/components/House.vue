<template lang="html">
<div class="">
      <div style="border:1px solid black" >
        <table>
          <tr>
            <td><img width="200px" height="150px" :src="house.image"></td>
            <td>{{house.title}}</td>
          <tr>
            <td><button @click="show">show</button></td>
                <td><button @click="removeHouse(house._id)" >remove</button></td>
          </tr>

        </table>
        <detail-house v-if="isShow" :house="house"></detail-house>

      </div>

</div>
</template>

<script>
import { mapActions } from 'vuex'
import DetailHouse from './DetailHouse.vue'

export default {
  props: ['house'],
  data(){
    return {
      isShow: false
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
  },
  methods: {
    ...mapActions ([
    'removeHouse'
  ]),
    show(){
      if(this.isShow) this.isShow=false;
      else this.isShow=true;
    }
  },
  components:{
    DetailHouse
  }

}
</script>
