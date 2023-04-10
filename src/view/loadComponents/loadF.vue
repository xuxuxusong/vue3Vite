<template>
  <div class="spinner">
    <div class="bounce1"></div>
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
  margin: 0 auto;
  width: 20px;
  height: 20px;
  background-color: #333;

  border-radius: 100%;
  // display: inline-block;
  -webkit-animation: sk-bouncedelay 1s infinite ease-in-out both;
  animation: sk-bouncedelay 1s infinite ease-in-out both;
}

@-webkit-keyframes sk-bouncedelay {
  0% { -webkit-transform: scale(0); }
  100% { -webkit-transform: scale(2); opacity: 0; }
}

@keyframes sk-bouncedelay {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% { 
    -webkit-transform: scale(2);
    transform: scale(2);
    opacity: 0; 
  }
}
</style>