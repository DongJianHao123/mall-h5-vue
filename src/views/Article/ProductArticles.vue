<script setup lang="ts">
import Api from "@/common/Api";
let props = defineProps(["type", "list"]);
let { type = "x", list } = props;
</script>
<template>
  <ul :class="type === 'x' ? 'product-article-x' : 'product-article-y'">
    <li
      v-for="({ title, img, cover, id, products, descr }, index) in list"
      :key="index"
      @click="Api.go(`/article/${id}`)"
    >
      <img className="cover" :src="img || cover" />
      <div className="extra">
        <p className="title">{{ title }}</p>
        <p className="descr">{{ descr }}</p>
        <dl>
          <dt v-for="{ img, specs, id } in products">
            <img :src="img || specs[0].imgs[0]" />
          </dt>
        </dl>
      </div>
    </li>
  </ul>
</template>
<style lang="scss">
@import "../../assets/css/mixin.scss";
.product-article-x {
  margin-top: 10px;
  padding: 0 4vw;
  width: 96vw;
  overflow-x: scroll;
  display: inline-flex;
  height: auto;
  li {
    width: 80vw;
    margin-right: 20px;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    .cover {
      width: 80vw;
      height: 50vw;
      border-radius: 6px 6px 0 0;
    }
    .extra {
      width: 100%;
      padding: 10px 10px;
      .title {
        font-family: PingFangSC-Semibold;
        font-size: 17px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 1.1px;
        color: #333333;
        @include multi-line(1);
      }
      .descr {
        margin-top: 10px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        height: 32px;
        line-height: 16px;
        letter-spacing: 1.25px;
        color: #c4c4c4;
        @include multi-line();
      }
      dl {
        margin-top: 20px;
        flex-direction: row;
        gap: 4px;
        display: flex;
        width: 100%;
        overflow-x: scroll;
        dt {
          img {
            width: calc((80vw - 35px) / 4);
            height: calc((80vw - 35px) / 4);
            border-radius: 6px;
          }
        }
      }
    }
  }
}

.product-article-y {
  @extend .product-article-x;
  width: 100%;
  margin-right: 0;
  overflow-x: auto;
  display: block;
  li {
    width: 92vw;
    margin-bottom: 10px;
    margin-right: 0;
    .cover {
      width: 92vw;
      height: 50vw;
      border-radius: 6px 6px 0 0;
    }
    .extra {
      .title {
        margin-top: 10px;
      }
      dl {
        margin-top: 20px;
        gap: 19px;
      }
    }
  }
}
</style>