<template>
  <div id="index">
    <h1>hello world!</h1>
    <p>halo Viola</p>
    <div v-for="(img, index) in imgList" :key="index">
      <img :src="img">
    </div>
    <div class="nice-pic"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {
      imgList: []
    };
  }
};
</script>
