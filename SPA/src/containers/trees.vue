<template>
  <div class="tree">
    <node>
      <node>
        <node></node>
      </node>
      <node>
        <node>
          <node></node>
          <node></node>
        </node>
        <node></node>
      </node>
    </node>
  </div>
  
</template>
<script>
  import Node from '../components/node'
  export default {
      components:{Node}
  }
</script>
<style>
  .tree{
    position: absolute;
    left:500px
  }
</style>
