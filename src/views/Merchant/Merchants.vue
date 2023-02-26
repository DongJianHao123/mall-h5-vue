<script setup lang="ts">
import Api from "@/common/Api";
import { computed, reactive, ref, watch } from "@vue/runtime-core";
import { RightOutlined } from "@ant-design/icons-vue";
import Utils from "@/common/Utils"

let props = defineProps(["list", "type"]);
let { list = [], type } = props;
let categories = ref([]);
let _list = ref([]);

computed(
  Api.myPost("usr/category/categories").then((res) => {
    categories.value = res;
    _list.value = list;
    console.log(categories);
  })
);

watch(list, (list, changedList) => {
  _list.value = changedList;
  console.log(_list);
});4
// console.log(_list.value);
</script>
<template>
  <ul class="common-merchants">
    <li
      v-for="(
        { id, logo, name, productCategorySequence, productNum }, index
      ) in _list"
      :key="index"
      @click="Api.go(`/finds/merchant/${id}`)"
    >
      <img :src="logo" />
      <div className="m-info">
        <p className="name">{{ name }}</p>
        <div className="extra">
          <div className="tag">
            {{" "}}
            <!-- {{
              Utils.merchant.renderProductCategories(
                categories,
                productCategorySequence,
                "#AE640B"
              )
            }} -->
          </div>
          <p className="product-num">共{{ productNum }}件商品</p>
          <p className="descr">查看详情 <RightOutlined /></p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
@import "../../assets/css/mixin.scss";

.common-merchants {
  width: 100%;
  padding: 10px 4vw;
  .wh {
    width: 46vw;
    height: 34.6vw;
  }
  li {
    border-radius: 6px;
    width: 92vw;
    margin-bottom: 10px;
    display: flex;
    background-color: #ffffff;
    position: relative;
    img {
      flex: 1;
      @extend .wh;
      border-radius: 6px 0 0 6px;
    }
    .m-info {
      flex: 1;
      @extend .wh;
      left: 46vw;
      padding: 15px 10px;
      // position: relative;
      .name {
        // font-family: PingFangSC-Medium;
        font-size: 15px;
        font-weight: 550;
        line-height: 19px;
        letter-spacing: 1.18px;
        color: #333333;
        @include multi-line();
      }
      .extra {
        position: absolute;
        bottom: 10px;
        .tag {
          margin: 10px 0;
        }
        .product-num {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.88px;
          color: #c4c4c4;
          margin-bottom: 6px;
        }
        .descr {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.88px;
          color: #333333;
        }
      }
    }
  }
}
</style>
