<template>
  <div class="spinner"></div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.spinner {
  margin: 100px auto 0;
  width: 50px;
  height: 50px;
  background: #333;
  text-align: center;
  -webkit-animation: sk-bouncedelay 1.5s infinite ease-in-out both;
  animation: sk-bouncedelay 1.5s infinite ease-in-out both;
}

@-webkit-keyframes sk-bouncedelay {
  0% { -webkit-transform: perspective(120px); }
  50% { -webkit-transform: perspective(120px) rotateY(180deg);}
  100% { -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);}
}

@keyframes sk-bouncedelay {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px);
    -webkit-transform: perspective(120px) rotateY(180deg);
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% { 
    -webkit-transform: perspective(120px);
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
</style>