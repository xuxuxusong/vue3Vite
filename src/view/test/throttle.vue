<template>
  <div class="content-box">
    <input type="text" @input="inputChange">
    <button @click="cancelClick">取消</button>
  </div>
</template>
<script setup>
import { flatMap } from "lodash"

let count = 0
const changeFn = function () {
  console.log(`输入了${++count}次内容`)
}


const throttle = (fn, delay, immediate = false) => {
  const _throttle = () => {
  }
  return _throttle
}


</script>