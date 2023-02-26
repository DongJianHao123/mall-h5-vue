<script setup lang="ts">
import { Api, U, Utils } from "@/common";
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const article = reactive({});
const _type = ref(1);

const loadData = () => {
  Api.myPost("/usr/article/article", { id: route.params.id }).then((res) => {
    let { id, content, type, title } = res;
    U.setWXTitle(title);
    article.value = res;
    _type.value = type;

    setTimeout(() => {
      let urls = [];
      let dom = U.htmlstr.html2dom(content || "<div></div>");
      let imgs = dom.getElementsByTagName("img"); //获取正文中的img标签
      for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        let src = img.src;
        if (src.startsWith("http://") || src.startsWith("https://")) {
          if (U.url.getDomainFromUrl(src) !== window.location.host) {
            urls.push(src);
          }
        }
      }
      imgsClickListner(urls); //点击打开图片查看器
    }, 1000);
  });
};
const imgsClickListner = (urls: Array<string>) => {
        let imgs = document.getElementsByTagName('img');
        for (let i = 0; i < imgs.length; i++) {
            let img = imgs[i];
            let index = urls.indexOf(img.src);
            if (index > -1) {
                img.onclick = () => {
                    let pnode = img.parentNode as Element;
                    if (pnode && pnode.tagName !== "A") {
                        Utils.common.showImgLightbox(urls, index);
                    }
                };
            }
        }
    };
    const testClick=()=>{
      Utils.common.showImgLightbox();
    }

onMounted(loadData);
</script>

<template>
  <div @click="testClick">123</div>
</template>

<style lang="scss">
</style>