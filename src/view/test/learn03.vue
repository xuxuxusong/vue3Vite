<template>
  <div class="mation">
    <div class="ap">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="ap aps">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.mation {
  // width: 120px;
  // height: 120px;
  // background: url('data:image/jpeg;base64,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');
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
}
.ap {
  position: relative;
  height: 50px;
  width: 30px;
  margin: 0 auto;
}
.aps {
  transform-origin: center center;
  transform: rotate(180deg);
}
.box div {
  display: inline-block;
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 30px;
  // 不喜欢该颜色改成想要的动画颜色
  background-color: rgb(78, 176, 255);
  transform-origin: bottom;
  border-radius: 5px 5px 0 0;
}
.aps .box div {
  background-color: rgb(0, 141, 255);
  bottom: 2px;
}
.box div:nth-child(1) {
  left: -60px;
  animation: musicWave 0.5s infinite linear both alternate;
}
.box div:nth-child(2) {
  left: -40px;
  animation: musicWave 0.8s infinite linear both alternate;
}
.box div:nth-child(3) {
  left: -20px;
  animation: musicWave 0.6s infinite linear both alternate;
}
.box div:nth-child(4) {
  left: 0px;
  animation: musicWave 0.7s infinite linear both alternate;
}
.box div:nth-child(5) {
  left: 20px;
  animation: musicWave 0.7s infinite linear both alternate;
}
.box div:nth-child(6) {
  left: 40px;
  animation: musicWave 0.6s infinite linear both alternate;
}
.box div:nth-child(7) {
  left: 60px;
  animation: musicWave 0.8s infinite linear both alternate;
}
.box div:nth-child(8) {
  left: 80px;
  animation: musicWave 0.5s infinite linear both alternate;
}
@keyframes musicWave {
  0% {
    height: 8px;
  }
  100% {
    height: 30px;
  }
}
</style>