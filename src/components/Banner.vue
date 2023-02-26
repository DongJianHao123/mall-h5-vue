<script setup lang="ts">
import Utils from "@/common/Utils";
import router from "@/router";
import { RightOutlined } from "@ant-design/icons-vue";
let props = defineProps(["isAd", "timer", "type", "items"]);
let { isAd, timer, type, items } = props;
</script>

<template>
  <a-carousel
    :class="type === 1 ? (isAd ? 'banner-ad' : 'home-banner') : 'find-banner'"
    autoplay
  >
    <div v-for="item in items" :key="item.index" class="item">
      <router-link to="/">
        <img :src="item.img" />
        <div v-if="isAd" className="ad-corner"></div>
      </router-link>
    </div>
  </a-carousel>
</template>

<style lang="scss">
@import "../assets/css/color.scss";

.slick-active {
  button {
    background: $primary-color !important;
    width: 10px;
    opacity: 1;
  }
}

.home-banner {
  img {
    width: 100vw;
    height: 100vw;
  }
}
.banner-ad-wh {
  width: 92vw;
  height: 26.7vw;
}
.banner-ad {
  width: 100vw;
  position: relative;
  .slick-list {
    border-radius: 0.5rem;
  }
  .slick-dots-bottom {
    bottom: 0;
  }
  padding: 0 4vw;
  img {
    @extend.banner-ad-wh;
    border-radius: 0.5rem;
  }
  .item {
    .ad-corner {
      z-index: 999;
      position: absolute;
      top: 10px;
      right: 4vw;
      background: rgba(#333333, 0.6);
      text-align: center;
      width: 40px;
      height: 18px;
      border-radius: 0 4px;
      &::after {
        content: "广告";
        font-size: 12px;
        line-height: 14px;
        color: #fff;
      }
    }
  }
}
.find-banner {
  img {
    height: 38.7vw;
  }
}
</style>
