<template>
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.spinner {
  margin: 100px auto 0;
  width: 70px;
  height: 70px;
  text-align: center;
  position: relative;
}

.spinner > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20px;
  height: 20px;
  background-color: #333;

  border-radius: 100%;
  // display: inline-block;
  -webkit-animation: sk-bouncedelay 2s infinite ease-in-out both;
  animation: sk-bouncedelay 2s infinite ease-in-out both;
}

.spinner .bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 100% { -webkit-transform: scale(0); }
  50% { -webkit-transform: scale(2); opacity: 0.5; }
}

@keyframes sk-bouncedelay {
  0%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 50% { 
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0.5; 
  }
}
</style>