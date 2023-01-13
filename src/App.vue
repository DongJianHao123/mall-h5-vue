<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import "../src/assets/css/common.scss";
let message = "HelloWorld";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
.clearfix:after {
  clear: both;
  content: ".";
  display: block;
  font-size: 0;
  height: 0;
  line-height: 0;
  visibility: hidden;
}

.clearfix-h20 {
  clear: both;
  height: 20px;
}
</style>
