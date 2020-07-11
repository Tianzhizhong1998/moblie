<template>
  <div class="home">
    <div class="add">{{this.$store.state.Home.n}}</div>
    <button @click="handleAdd">增加13232</button>
  </div>
</template>

<script>
import {apiAddress} from '../../api'
export default {
    name:"home",
    created(){
      console.log(this)
    },
    methods:{
       handleAdd(){
         this.apiAddress()
      },
      async apiAddress(){
        let params ={
          
        }
         const res = await this.$store.dispatch("Home/handleHomeadd",{})
         if(res.apstaus){

         }
         console.log(res)
      }
    }
}
</script>
<style scoped lang="less" >
.add{
  width: 100%;
  height:50px;
  background: pink;
}
</style>