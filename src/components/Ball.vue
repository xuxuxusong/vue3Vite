<template>
  <button @click="show = !show">switch</button>
  <transition
    duration="5000"
    @before-enter="EnterFrom"
    @enter="EnterActive"
    @leave="Leave"
    >
    <div v-if="show" class="box"></div>
  </transition>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import gsap from 'gsap'
  const show = ref<Boolean>(true)
  const EnterFrom = (el: Element, done: Function) => {
    gsap.set(el, {
      width: 0,
      height: 0
    })
  }
  const EnterActive = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
      width: 200,
      height: 200,
      onComplete: done
    })
  }
  const Leave = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
      width: 0,
      height: 0,
      onComplete: done
    })
  }
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: salmon;
}
</style>