<template>
  <div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <!-- <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div> -->
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.sk-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s; 
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; 
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; 
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; 
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; 
}
@keyframes sk-circleBounceDelay {
  0%, 40%, 100% { 
    // transform: scale(0.5);
    opacity: 0;
  }
  40% {
    // transform: scale(1.5);
    opacity: 1;
  }
}

</style>