<template>
  <div>
    <div class="mainpage-title">
      <headmenu></headmenu>
    </div>
    
    <div class="mainpage-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Headmenu from '../components/headmenu.vue'
  export default {
      components:{Headmenu}
  }
</script>
<style scoped>
   .mainpage-title{
     position:fixed;
     height:70px;
     width:100%
   }
   
   .mainpage-body{
     position:absolute;
     top: 70px;
   }
</style>
