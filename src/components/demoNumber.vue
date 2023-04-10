<template>
  <div>
    <input v-model="obj.current" type="number" step="20"/>
    <div>{{obj.other.toFixed(2)}}</div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, watch } from "vue";
  import gsap from 'gsap'
  const obj = reactive({
    current: 0,
    other: 0
  })
  watch(
    () => obj.current,
    (newVal:number) => {
      gsap.to(obj, {
        duration: 1,
        other: newVal
      })
    }
  )
  
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