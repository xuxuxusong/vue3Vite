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
// const debounce = (fn, delay, immediate = false) => {
//   let timer = null
//   let isInvoke = false
//   const _debounce = function (...args) {
//     const _this = this
//     if (immediate && !isInvoke) {
//       fn.apply(_this, args)
//       isInvoke = true
//     } else {
//       if (timer) clearTimeout(timer)
//       timer = setTimeout(() => {
//         fn.apply(_this, args)
//         isInvoke = false
//       }, delay)
//     }
//   }
//   _debounce.cancel = function () {
//     if (timer) clearTimeout(timer)
//     timer = null
//     isInvoke = false
//   }
//   return _debounce
// }
// const inputChange = debounce(changeFn, 2000, true)
// const cancelClick = () => {
//   inputChange.cancel()
// }

const debounce = (fn, delay, immediate = false) => {
  let timer
  let isInvoke = false
  const _debounce = (...arg) => {
    const that = this
    if (!isInvoke) {
      fn()
      isInvoke = true
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(that, arg)
        isInvoke = false
      }, delay)
    }
    _debounce.cancel = () => {
      if (timer) clearTimeout(timer)
      isInvoke = false
    }
  }
  return _debounce
}
const inputChange = debounce(changeFn, 2000, true)
const cancelClick = () => {
  inputChange.cancel()
}

</script>