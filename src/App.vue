<template>
  <div class="app-wrapper">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    console.log(window.sc);
    return {};
  }
};
</script>
<style lang="scss">
// @import "./style/common.scss";
@import "./style/mixin.scss";

@include queryWidth(-1, 319);
@include queryWidth(320, 359);
@include queryWidth(360, 374);
@include queryWidth(375, 383);
@include queryWidth(384, 399);
@include queryWidth(400, 413);
@include queryWidth(414, -1);
</style>

