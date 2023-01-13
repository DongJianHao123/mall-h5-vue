<script setup lang="ts">
// import { U } from "@/common";
import { Api, U } from "@/common";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import TitleMore from "@/components/TitleMore.vue";

interface HomeUIItem {
  key: string;
  list: Array<any>;
  listStyle: number;
  title: string;
}

const components: Array<HomeUIItem> = reactive([]);
const loadData = () => {
  Api.myPost("usr/ui/get_defaultUI", {
    type: 1,
  }).then((data: any) => {
    components.value = data.components;
    console.log(components);
  });
};

const filterCategorys = computed(() => {
  let categorys: Array<any> = components.value.find(
    (item) => item.key === "CATEGORY"
  ).list;
  if (categorys.length > 6) {
    categorys = categorys.filter((item, index) => index < 5);
    categorys.push({
      icon: "../src/assets/img/home/icon_category_more.png",
      id: 0,
      name,
    });
  }
  return categorys;
});

onMounted(() => {
  U.setWXTitle("首页");
  loadData();
});
</script>

<template>
  <div class="home">
    <div v-for="component in components.value" :key="component.key">
      <a-carousel class="banner" v-if="component.key === 'BANNER'" autoplay a>
        <div v-for="item in component.list" :key="item.index">
          <router-link to="/about"> <img :src="item.img" /></router-link>
        </div>
      </a-carousel>
      <div class="category" v-else-if="component.key === 'CATEGORY'">
        <ul>
          <li v-for="(item, index) in filterCategorys" :key="index">
            <router-link
              :to="item.id === 0 ? '/categories' : `/category/${item.id}`"
              ><img :src="item.icon"
            /></router-link>
          </li>
          <div className="clearfix"></div>
        </ul>
      </div>
      <div class="bargain" v-else-if="component.key === 'BARGAIN'">
        <TitleMore type="BARGAIN" :title="component.title" />
        <ul>
          <li
            v-for="(item, index) in component.list"
            :key="index"
            @click="Api.go('/bargain')"
          >
            <img :src="item.img" />
            <div className="img-corner">限时特惠</div>
          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
      <div class="new_product" v-else-if="component.key === 'NEW_PRODUCT'">
        <TitleMore type="NEW_PRODUCT" :title="component.title" />
        <ul>
          <li
            v-for="(item, index) in component.list"
            :key="index"
            @click="Api.go(`/product/${item.id}`)"
          >
            <img :src="item.img" />
            <p class="name">{{ item.name }}</p>
            <p class="price">￥ {{ item.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/css/mixin.scss";
@import "../../assets/css/color.scss";

.home {
  .banner {
    img {
      width: 100vw;
      height: 100vw;
    }

    .slick-active {
      button {
        background: $primary-color !important;
        opacity: 1;
      }
    }
  }

  .category {
    ul {
      width: 100vw;
      margin-top: 10px;
      padding: 0 4vw;

      .wh {
        width: calc((92vw - 22px) / 3);
        height: calc((92vw - 22px) / 3);
      }

      li {
        @extend.wh;
        background-color: #eeecf6;
        float: left;
        margin: 0 11px 11px 0;

        // position: relative;
        img {
          @extend.wh;
          border-radius: 8px;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
  .bargain {
    ul {
      margin: 0 4vw 10px 4vw;
      width: 92vw;
      height: calc(45.3vw + 10px);
      position: relative;
      // padding: 0 4vw;
      .img-wh {
        position: absolute;
        width: 45.3vw;
        height: 21.8vw;
        border-radius: 5px;
      }
      li {
        position: absolute;
        &:nth-child(1) {
          top: 0;
          left: 0;
          img {
            @extend .img-wh;
            height: 45.3vw;
          }
        }
        &:nth-child(2) {
          top: 0;
          right: 45.3vw;
          img {
            @extend .img-wh;
          }
        }
        &:nth-child(3) {
          right: 45.3vw;
          bottom: calc(21.8vw + 10px);
          img {
            @extend .img-wh;
          }
        }
        .img-corner {
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            269deg,
            #ff3672 7%,
            #ff3672 7%,
            #ff6c6c 48%,
            #ff9b63 95%,
            #ff9b63 95%
          );
          width: 60px;
          height: 22px;
          line-height: 22px;
          font-size: 10px;
          text-align: center;
          color: $bg-white;
          border-radius: 5px 0;
        }
      }
    }
  }
  .new_product {
    ul {
      
      background-color: #f8f8f8;
      padding: 10px 4vw;
      li {
        float: left;
        margin-right: 10px;
        background-color: white;
        margin-bottom: 10px;
        border-radius: 8px;
        padding: 0 0 10px 0;
        img {
          border-radius: 5px 5px 0 0;
          width: calc((92vw - 20px) / 3);
          height: calc((92vw - 20px) / 3);
        }
        .name {
          font-size: 13px;
          text-align: center;
          color: #999999;
          line-height: 30px;
          @include multi-line(1);
        }
        .price {
          font-size: 13px;
          line-height: 5px;
          letter-spacing: 0px;
          text-align: center;
          color: #333333;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
