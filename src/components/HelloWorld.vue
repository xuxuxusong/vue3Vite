<template>
  <button @click="show = !show">switch</button>
  <transition duration="5000" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOutDown">
    <div v-if="show" class="box"></div>
  </transition>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import 'animate.css';
  const show = ref<Boolean>(true)
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: salmon;
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>