<template>
  <div class="A">
    <h1>父</h1>
    <h4>{{flag}}</h4>
    <B />
  </div>
</template>
<script lang="ts" setup>
import B from './B.vue'
import { inject } from 'vue'
const flag = inject('flag')
</script>
<style scoped>
 .A {
    width: 250px;
    height: 250px;
    background: blue;
    font-size: 20px;
  }
</style>