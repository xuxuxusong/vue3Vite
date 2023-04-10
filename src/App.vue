<template>
  <!-- <HelloWorld /> -->
  <!-- <Ball /> -->
  <!-- <demo /> -->
  <!-- <demoNumber /> -->
  <!-- <div class="appRoot">
    <h1>根</h1>
    <A />
  </div> -->
  <router-view />
  <!-- <div id="app">
    <div class="screen-root">
      <div class="screen" id="screen" >
        <router-view />
      </div>
    </div>
  </div> -->
</template>
<script setup>
  import { provide, ref, onMounted } from 'vue';
  provide('flag', ref('哈哈'))
  // onMounted(() => {
  //   handleScreenAuto()
  //   // 绑定自适应函数   ---防止浏览器栏变化后不再适配
  //   window.onresize = () => handleScreenAuto()
  // })
  // const handleScreenAuto = () => {
  //   const designDraftWidth = 1920 // 设计稿的宽度
  //   // const designDraftHeight = 960 // 设计稿的高度
  //   // 根据屏幕的变化适配的比例
  //   const scale = document.documentElement.clientWidth / designDraftWidth
  //   // 缩放比例
  //   document.querySelector('#screen').style.transform = `scale(${scale}) translate(-50%)`
  // }
</script>
<style scoped lang="scss">
.screen-root {
  height: 100%;
  width: 100%;
  .screen {
    display: inline-block;
    width: 1920px; //设计稿的宽度
    height: 1080px; //设计稿的高度
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
  }
}
.appRoot {
  width: 300px;
  height: 300px;
  background: red;
  color: #fff;
}
* {
/* 初始化 取消页面的内外边距 */
padding: 0;
margin: 0;
}
ul li {
   list-style: none
}
</style>
