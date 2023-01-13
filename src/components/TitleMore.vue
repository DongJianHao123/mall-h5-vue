<script setup lang="ts">
import Utils from "@/common/Utils";
import router from "@/router";
import { RightOutlined } from "@ant-design/icons-vue";
let props = defineProps(["type", "title"]);
let { type = "", title = "标题" } = props;
console.log(type);
let item = Utils.homePage.getTitleMoreByUIKey(type);
let link = item.more_link;
</script>

<template>
  <div class="title-more">
    <p class="title">{{ title }}</p>
    <div class="more" @click="router.push(link)">
      <span>查看更多</span>
      <RightOutlined class="icon-right" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import "../assets/css/color.scss";
.title-more {
  padding: 0 4vw;
  display: flex;
  //   height: 50px;
  //   line-height: 50px;
  margin-top: 10px;
  .title {
    flex: 1;
    font-size: 4.5vw;
    color: #333;
    font-weight: 550;
  }
  .title-btm {
    height: 36px;
    border-bottom: $primary-color solid 8px;
  }
  .more {
    font-size: 3vw;
    color: #c4c4c4;
    line-height: 7.2vw;
    span {
      margin-right: 10px;
    }
    .icon-right {
      line-height: 22px;
    }
  }
}
</style>
