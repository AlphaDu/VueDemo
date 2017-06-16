<template>
  <div class="box">
    <p>This is login page.</p>
    <div class="inputArea">
      <input/>
    </div>
    <div class="inputArea">
      <input/>
    </div>
    <button v-on:click="login">登录</button>
  </div>
</template>
<script>
  import LoginService from '../services/loginservice'
 export default{
   data:function () {
     return{
       username:'',
       passeord:'',
     }
   },
   methods:{
       login:function () {
         
       }
   }
 }
</script>
<style>
  .inputArea{
    margin:40px
  }
  
  .box{
    border-style:solid;
    border-width: 1px;
    border-color: #000000;
    height:1080px
  }
</style>
