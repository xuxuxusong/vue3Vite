<template>
  <input type="text" v-model="inputValue">
  <div class="line-one">
     <select size="5" v-model="selected">
      <option v-for="name in filteredNames" :key="name">{{ name }}</option>
    </select>
    <div class="one-right">
      <label>姓：<input v-model="firstName"/></label>
      <label>名：<input v-model="lastName"/></label>
    </div>
  </div>
  <div class="line-two">
    <button @click="btnClick(0)">add</button>
    <button @click="btnClick(1)">update</button>
    <button @click="btnClick(2)">delete</button>
  </div>
</template>
<script setup lang="ts">
import { functions } from "lodash";
import { ref, reactive, computed, watch } from "vue";
// const tabClick = (i: number) => {
//   tabMark.value = i;
// };
const inputValue = ref('')
const selected = ref('')
const firstName = ref('')
const lastName = ref('')
const names = reactive(['张, 三', '李, 四', '王, 五'])
const filteredNames = computed(() => {
  return names.filter(n => n.startsWith(inputValue.value))
})
const btnClick = function(i: number) {
  console.log(i)
  switch (i) {
    case 0:
      if (firstName.value && lastName.value) {
        const val = firstName.value + ', ' + lastName.value
        if (!names.includes(val)) {
          names.push(val)
          firstName.value = ''
          lastName.value = ''
        }
      }
      return
    case 1:
      if (firstName.value && lastName.value && selected.value) {
        const i = names.indexOf(selected.value)
        names[i] = selected.value = firstName.value + ', ' + lastName.value
      }
      return
    case 2:
      if (names.length > 0) {
        names.splice(names.length - 1, 1)
      } else {
        alert('不能再删了')
      }
      return
  }
}
watch(selected, (name) => {
  [firstName.value, lastName.value] = name.split(', ')
})
</script>
<style lang="scss" scoped>
.line-one {
  display: flex;
  select {
    margin-top: 10px;
    width: 400px;
  }
  .one-right {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
.line-two {
  margin-top: 20px;
  button {
    margin-right: 10px;
  }
}
</style>