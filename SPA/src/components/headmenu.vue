<template>
  <ul class="head-menu-body">
    <li class="head-menu-button">
        写点组件
    </li>
    <li class="head-menu-button">
      施工中
    </li>
    <li class="head-menu-button">
      施工中
    </li>
  </ul>
</template>
<script>
  export default {
    name:'Headmenu'
  }
</script>
<style >
  .head-menu-body{
    height: 50px;
    width: 100%;
    border-style:solid;
    border-bottom-color: cornflowerblue;
    border-width: 0 0 1px 0;
    position:fixed;
    padding-left: 10px;
  }
  .head-menu-button{
    display: block;
    position:relative;
    text-align:center;
    width:100px;
    line-height:50px;
    margin:0 20px 0 20px ;
    
  }
  .head-menu-button:hover{
    color:dodgerblue;
  }
  .head-menu-button:after{
    background-color: darkblue;
    content:" ";
    border-bottom: 3px solid darkblue;
    width:70px;
    bottom: 0;
    left:0;
    position:absolute;
  }
</style>
