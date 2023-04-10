<template>
  <div>
    <button @click="change">过渡效果</button>
    <transition-group class="card" tag="div" move-class="move">
      <div class="box" v-for="item in list" :key="item.id">{{item.num}}</div>
    </transition-group>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import _ from 'lodash'
  const list = ref(Array.apply(null, {length: 81} as number[]).map((_, index) => {
    return {
      id: index,
      num: (index % 9) + 1
    }
  }))
  console.log(list.value)
  const change = () => {
    console.log('点击了')
    list.value = _.shuffle(list.value)
    console.log(list.value)
  }
</script>
<style scope>
  .card {
    display: flex;
    flex-wrap: wrap;
    width: calc(30px * 10 + 9px)
  }
  .box {
    width: 30px;
    height: 30px;
    border: 1px solid #666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .move {
    transition: all .5s;
  }
</style>