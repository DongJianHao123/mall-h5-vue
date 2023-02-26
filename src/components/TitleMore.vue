<script setup lang="ts">
import Utils from "@/common/Utils";
import router from "@/router";
import { RightOutlined } from "@ant-design/icons-vue";
let props = defineProps(["type", "title", "descr", "withBtm"]);
let { type = "", title = "标题", withBtm = false, descr } = props;
console.log(type);
let item = Utils.homePage.getTitleMoreByUIKey(type);
let link = item.more_link;
</script>

<template>
  <div class="title-more">
    <div class="title">
      <div :class="withBtm ? 'title-btm' : ''">
        <p>{{ title }}</p>
      </div>
    </div>
    <span v-if="descr" className="descr">{{ descr }}</span>
    <div class="more" @click="router.push(link)">
      <span>查看更多</span>
      <RightOutlined class="icon-right" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import "../assets/css/color.scss";
.title-more {
  position: relative;
  margin: 10px;
  width: 92vw;
  height: 50px;
  line-height: 50px;
  margin-left: 4vw;
  .title {
    font-size: 4.5vw;
    color: #333;
    font-weight: 550;
    float: left;
    p {
      font-size: 16px;
      color: #333;
      font-weight: 550;
    }
    .title-btm {
      border-radius: 2px;
      height: 36px;
      border-bottom: $primary-color solid 8px;
    }
  }
  .descr {
    position: absolute;
    left: 0;
    top: 25px;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.88px;
    color: #9a9a9a;
  }
  .more {
    float: right;
    font-size: 11px;
    color: #c4c4c4;
    span {
      margin-right: 5px;
    }
    .icon-right {
      line-height: 22px;
    }
  }
}
</style>
