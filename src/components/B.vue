<template>
  <div class="B">
    <h1>子</h1>
    <button @click="changeData">change</button>
    <p>{{flag}}</p>
  </div>
</template>
<script lang="ts" setup>
import { inject, Ref, ref } from 'vue'
const flag = inject<Ref<String>>('flag', ref(''))
const changeData = () => {
  flag.value = '呵呵'
}
</script>
<style scoped>
 .B {
    width: 200px;
    height: 200px;
    background: green;
  }
</style>