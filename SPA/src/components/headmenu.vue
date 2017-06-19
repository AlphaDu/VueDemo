<template>
  <ul class="head-menu-body">
    <li class="head-menu-button" @click.capture.stop="onclickMenu">
      <router-link to="/components">
      <span>
        写点组件
      </span>
      </router-link>
    </li>
    <li class="head-menu-button" @click.capture.stop="onclickMenu">
      <span>
        施工中
      </span>
    
    </li>
    <li class="head-menu-button" @click.capture.stop="onclickMenu">
      <span>
        施工中
      </span>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'Headmenu',
    data: function () {
      return {}
    },
    methods: {
      onclickMenu(event){
        let self=event.currentTarget;
        event.currentTarget.parentNode.childNodes.forEach((element, index) => {
          if (element.nodeName !== 'LI') return;
          if (element !== self){
            element.setAttribute("class", "head-menu-button");
          } else {
            element.setAttribute("class", "head-menu-button-selected");
          }
        });
      }
    }
  }
</script>
<style>
  .head-menu-body {
    height: 50px;
    width: 100%;
    /*border-style:solid;*/
    /*border-bottom-color: cornflowerblue;*/
    /*border-width: 0 0 1px 0;*/
    background-color: lightgray;
   
    padding-left: 10px;
    margin: 0;
    
  }
  a{
    text-decoration: none;
  }
  
  .head-menu-button {
    cursor: pointer;
    display: inline;
    position: relative;
    text-align: center;
    width: 100px;
    line-height: 50px;
    margin: 0 20px 0 20px;
    padding: 20px 10px 20px 10px;
    
  }
  
  .head-menu-button-selected {
    cursor: pointer;
    display: inline;
    position: relative;
    text-align: center;
    width: 100px;
    line-height: 50px;
    margin: 0 20px 0 20px;
    padding: 20px 10px 20px 10px;
    
  }
  
  .head-menu-button > span {
    text-align: center;
  }
  a{
    color: black
  }
  .head-menu-button:hover > a {
    color: dodgerblue;
  }
  
  .head-menu-button:after {
    content: " ";
    border-bottom: 3px solid dodgerblue;
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition-duration: 0.5s;
    transition-property: all;
  }
  
  .head-menu-button-selected:after {
    content: " ";
    border-bottom: 3px solid dodgerblue;
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    transform: scaleX(1);
    transition-duration: 0.5s;
    transition-property: all;
    
  }
</style>
