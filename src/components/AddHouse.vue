<template lang="html">
<div class="">
      <div >
        <h5>Add House For Sell</h5>
        <table>
          <tr>
            <td>Title</td>
            <td><input type="text" v-model="title"></td>
          </tr>
          <tr>
            <td>Description</td>
            <td><input type="text" v-model="description"></td>
          </tr>
          <tr>
            <td>Price</td>
            <td><input type="text" v-model="price"></td>
          </tr>
          <tr>
            <td>Image</td>
            <td><input type="text" v-model="image"></td>
          </tr>
          <tr>
            <td>Owner</td>
            <td><input type="text" v-model="owner"></td>
          </tr>
          <tr>
            <td>Phone</td>
            <td><input type="text" v-model="phone"></td>
          </tr>
          <tr>
            <td>Address</td>
            <td><input type="text" v-model="address"></td>
          </tr>
        </table>
        <button >Submit</button>

      </div>

</div>
</template>

<script>
import axios from 'axios'
import localUrl from '../constants'

export default {
  data(){
    return {
      title: '',
      description: '',
      price: '',
      image: '',
      owner: '',
      phone: '',
      address: ''
    }
  },
  methods: {
  //   postAnswer(){
  //     let id = this.$route.params.id
  //     let self = this;
  //     axios.post(`${localUrl}/questions/${self.questionId}/answers`, {
  //       answer   : self.answerInput
  //     },{headers: {'token': window.localStorage.getItem('token')}})
  //     .then((res) => {
  //       if (res.data.success){
  //            self.$message('Your answer is post on Hacktivoverflow');
  //            console.log('ayo ',res.data.data);
  //            self.$emit('answerAdded', res.data.data)
  //           //  self.$router.push(`/questions/${self.questionId}`)
  //            self.answerInput = ''
  //       }else {
  //           this.$message.error('Oops, sepertinya ada yang salah');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.$message.error('Oops, sepertinya ada yang salah');
  //     })
  //   }
  }
}
</script>

<style lang="css">

</style>
