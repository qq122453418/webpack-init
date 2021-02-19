<template>
  <div id="index">
    <h1>hello world!</h1>
    <img v-for="item in imgs" v-bind:src="item" />
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
        imgs:['../imgs/1.jpg']
    };
  }
};
</script>
