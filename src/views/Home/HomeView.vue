<script setup lang="ts">
import { Api, U } from "@/common";
import { computed, onMounted, reactive } from "@vue/runtime-core";
import TitleMore from "@/components/TitleMore.vue";
import Banner from "@/components/Banner.vue";
import type { UIItem } from "@/common/Model";

const components: Array<UIItem> = reactive([]);
const loadData = () => {
  Api.myPost("usr/ui/get_defaultUI", {
    type: 1,
  }).then((data: any) => {
    components.value = data.components;
    console.log(components);
  });
};

function click(y: number, operation: string) {
  let x = 1;
  if (operation === "+") {
    alert(x + y);
  } else if (operation === "-") {
    alert(x - y);
  } else if (operation === "*") {
    alert(x * y);
  } else if (operation === "/") {
    alert(x / y);
  }
}

const filterCategorys = computed(() => {
  let categorys: Array<any> = components.value.find(
    (item: any) => item.key === "CATEGORY"
  ).list;
  if (categorys.length > 6) {
    categorys = categorys.filter((item: any, index: number) => index < 5);
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
      <Banner
        v-if="component.key === 'BANNER'"
        :items="component.list"
        :type="1"
        :isAd="false"
      />
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
          <div class="clearfix"></div>
        </ul>
      </div>
      <Banner
        v-else-if="component.key === 'AD'"
        :items="component.list"
        :type="1"
        :isAd="true"
      />
      <div class="hot_product" v-else-if="component.key === 'HOT_PRODUCT'">
        <TitleMore type="HOT_PRODUCT" :title="component.title" />
        <ul className="hot-product">
          <li
            @click="Api.go(`/finds/product/${id}`)"
            v-for="(item, index) in component.list"
            :key="index"
          >
            <img :src="item.img" />
            <div className="info">
              <p>{{ item.name }}</p>
              <a-tag v-if="index % 3 === 0" color="red"
                >限时特惠</a-tag
              >
              <div>￥{{ item.price }}</div>
            </div>
          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/css/mixin.scss";
@import "../../assets/css/color.scss";

.gou {
  width: 200px;
  margin-left: 50px;
  border-radius: 15px;
}

.home {
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
  .hot_product {
    ul {
      padding: 10px 4vw;
      li {
        width: calc((92vw - 10px) / 2);
        border-radius: 6px;
        background-color: #ffffff;
        float: left;
        margin: 0 10px 10px 0;
        padding-bottom: 20px;
        img {
          border-radius: 6px 6px 0 0;
          width: calc((92vw - 10px) / 2);
          height: calc((92vw - 10px) / 2);
        }
        .info {
          padding: 5px 10px;
          p {
            font-size: 15px;
            font-weight: 550;
            line-height: 30px;
            color: #333333;
            @include multi-line();
          }
          div {
            font-size: 13px;
            font-weight: 600;
            line-height: 30px;
            color: #333333;
          }
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
