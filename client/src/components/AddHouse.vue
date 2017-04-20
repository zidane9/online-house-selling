<template lang="html">
<div class="">
      <div >
        <h5>Add House For Sell</h5>
        <form>
        <table>
          <tr>
            <td>Title</td>
            <td><input type="text" name="title" v-model="newHouse.title" ></td>
          </tr>
          <tr>
            <td>Description</td>
            <td><input type="text" name="description" v-model="newHouse.description" ></td>
          </tr>
          <tr>
            <td>Price</td>
            <td><input type="text" name="price" v-model="newHouse.price" ></td>
          </tr>
          <tr>
            <td>Image</td>
            <td><input type="text" name="image" v-model="newHouse.image" ></td>
          </tr>
          <tr>
            <td>Owner</td>
            <td><input type="text" name="owner" v-model="newHouse.owner" ></td>
          </tr>
          <tr>
            <td>Phone</td>
            <td><input type="text" name="phone" v-model="newHouse.phone" ></td>
          </tr>
          <tr>
            <td>Address</td>
            <td><input type="text" name="address" v-model="newHouse.address" ></td>
          </tr>
        </table>
      </form>
        <button @click="addHouse(newHouse)" >Submit</button>

      </div>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      newHouse: {
        title: '',
        description: '',
        price: '',
        image: '',
        owner: '',
        phone: '',
        address: ''
      }
    }
  },
  methods: mapActions ([
    'addHouse'
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
