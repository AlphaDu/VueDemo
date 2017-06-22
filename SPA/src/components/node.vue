<template>
  <div class="round">
    <slot></slot>
  </div>

</template>
<script>
export default {
    name:'node'
}
</script>
<style>
  .round{
    width:30px;
    height:30px;
    border-radius:50px;
    border-style:solid;
    position:absolute
  }
  .round:first-child{
    top:70px;
    left:-40px;
  }
  .round:first-child:before{
    content: ' ';
    display: block;
    position: absolute;
    width: 3px;
    height: 70px;
    background-color: black;
    left: 0px;
    top: 0px;
  }
  .round:last-child{
    top:70px;
    left:40px
  }
  .round:last-child:before{
    content: '';
    display: block;
    position: absolute;
    width: 3px;
    height: 60px;
    background-color: black;
    left: 0px;
    top: 0px;
    transform: translate(35px, 10px) rotate(-0.51914611rad);
  }
</style>
