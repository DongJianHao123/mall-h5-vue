<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>123</div>
    <button v-if="isable" @[eventName]="useCount.increment">
      {{ useCount.count }}
    </button>
    <button v-if="isable" @[eventName]="()=>{
      // console.log(123);
      state.pay++;
    }">
      {{ state.pay }}
    </button>
    <div>{{ useCount.count > 30 ? 123 : "456" }}</div>
    <input v-model="state.name" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { reactive, watch } from "@vue/runtime-core";

let useCount = useCounterStore();
// const pay = ref(10);
const state = reactive({
  name: "董建豪",
  pay: 10,
});
let isable = true;
let eventName = "click";
const Log=()=>{
  console.log(123);
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
