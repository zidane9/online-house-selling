<template lang="html">
<div class="">
      <div >
        <h5>Detail</h5>
        <form>

        <table>
          <tr>
            <td>Title</td>
            <td><input type="text" name="title" v-model="house.title" ></td>
          </tr>
          <tr>
            <td>Description</td>
            <td><input type="text" name="description" v-model="house.description" ></td>
          </tr>
          <tr>
            <td>Price</td>
            <td><input type="text" name="price" v-model="house.price" ></td>
          </tr>
          <tr>
            <td>Image</td>
            <td><input type="text" name="image" v-model="house.image" ></td>
          </tr>
          <tr>
            <td>Owner</td>
            <td><input type="text" name="owner" v-model="house.owner" ></td>
          </tr>
          <tr>
            <td>Phone</td>
            <td><input type="text" name="phone" v-model="house.phone" ></td>
          </tr>
          <tr>
            <td>Address</td>
            <td><input type="text" name="address" v-model="house.address" ></td>
          </tr>
        </table>
      </form>
        <button @click="updateHouse(house)" >Update</button>

      </div>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props:['house'],
  // data(){
    // return {
    //   house: {
    //     title: '',
    //     description: '',
    //     price: '',
    //     image: '',
    //     owner: '',
    //     phone: '',
    //     address: ''
    //   }
    // }
  // },
  methods: mapActions ([
    'updateHouse'
  ])
    // getHouse(e) {
    //   this.$store.dispatch('getHouse', e.target.value)
    // },
    // addHouse(){
    //   this.$store.dispatch('addHouse')
    //   this.$store.dispatch('clearHouse')
    // }

}
</script>

<style lang="css">

</style>
