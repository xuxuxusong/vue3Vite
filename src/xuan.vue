<template>
<div class="page">
  <div class="outer-wrapper" @mouseleave="mouseleaveHandler" @mouseenter="mouseEnterHandler">
    <div class="wrapper">
      <div class="inside-wrapper"></div>
    </div>
    <div v-for="n in 5"
      :key="n"
      :ref="`ball-${n}`"
      :class="`ball ball-${n} ${activeIndex === n ? 'active' : ''}`"
      @webkitAnimationIteration="(e) => animationHandle(e, n)"
      @click="clickHandler(n)"
    >
      {{ n }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'css-rotate',
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    clickHandler (n) {
      this.activeIndex = n
    },
    animationHandle (e, n) {
      const { offsetTop, offsetLeft } = e.target
      console.log(e.target.offsetTop, e.target.offsetLeft)
      if (
        offsetTop === 52 &&
        offsetLeft === 15
      ) {
        const index = n === 6 ? 1 : n + 1
        console.log(this.$refs[`ball-${index}`], index)
        this.activeIndex = index
      }
    },
    mouseEnterHandler () {
      for (let i = 1; i < 7; i++) {
        this.$refs[`ball-${i}`][0].style.animationPlayState = 'paused'
      }
    },
    mouseleaveHandler () {
      for (let i = 1; i < 7; i++) {
        this.$refs[`ball-${i}`][0].style.animationPlayState = 'running'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}
@keyframes animX {
  0% {
    left: 25px;
  }
  100% {
    left: 971px;
  }
}
@keyframes animY {
  0% {
    top: 153px;
  }
  100% {
    top: -41px;
  }
}
.outer-wrapper {
  width: 1076px;
  height: 226px;
  border-radius: 50%;
  border: 1px solid #224369;
  position: relative;
  // transform: rotateX(30deg) rotateY(-30deg);
  transform: rotate(-10deg);
  .wrapper {
    width: 946px;
    height: 190px;
    margin-top: 8px;
    margin-left: 70px;
    border-radius: 50%;
    border: 1px solid rgba(255, 188, 148, 0.612);
    box-shadow: 0 2px 50px 2px rgba(255, 188, 148, 0.612), inset 0 -10px 80px 2px rgba(255, 178, 99, 0.29);
    .inside-wrapper {
      width: 710px;
      height: 116px;
      margin-top: 21px;
      margin-left: 118px;
      border-radius: 50%;
      border: 1px solid rgba(255, 188, 148, 0.612);
      box-shadow: 0 2px 50px 2px rgba(255, 188, 148, 0.61), inset 0 -10px 50px 1px rgba(255, 232, 122, 0.16);
    }
  }
  .ball {
    width: 90px;
    height: 90px;
    position: absolute;
    background: rgba(20, 75, 133, 0.75);
    box-shadow: 0 0 20px 1px rgba(104, 235, 255, 0.15);
    border-radius: 50%;
    cursor: pointer;
    transition: 300ms;
    &.active {
      width: 120px;
      height: 120px;
      background: red;
      transition: 300ms;
      &::before {
        content: '';
        display: block;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px dashed #FFCA4C;
        position: absolute;
        margin-top: -15px;
        margin-left: -15px;
        transition: 300ms;
      }
      &::after {
        content: '';
        display: block;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: 2px solid #FFCA4C;
        position: absolute;
        margin-top: -30px;
        margin-left: -9px;
        transition: 300ms;
      }
    }
    &.ball-1 {
      animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate,
          animY 15s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate
    }
    &.ball-2 {
      animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
        animY 15s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate
    }
    &.ball-3 {
      animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate,
        animY 15s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate
    }
    &.ball-4 {
      animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -24s infinite alternate,
        animY 15s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate
    }
    &.ball-5 {
      animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -30s infinite alternate,
        animY 15s cubic-bezier(0.36, 0, 0.64, 1) -24s infinite alternate
    }
    // &.ball-6 {
    //   animation: animX 15s cubic-bezier(0.36, 0, 0.64, 1) -30s infinite alternate,
    //     animY 15s cubic-bezier(0.36, 0, 0.64, 1) -25s infinite alternate
    // }
  }
}

</style>
