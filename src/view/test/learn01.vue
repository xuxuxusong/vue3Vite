<template>
  <!-- <div class="tab">
    <div
      class="tab-item"
      :class="tabMark === index ? 'tab-item-active' : ''"
      v-for="(item, index) in tabList"
      :key="index"
      @click="tabClick(index)"
    >
      {{ item }}
    </div>
  </div>
  <div class="content">
    <div class="rect"></div>
    <div class="triangle"></div>
  </div> -->
  <div class="one-bg">
    <p data-text="Lorem ipsum dolor">Lorem ipsum dolor</p>
  </div>
  <div class="hello">Hello</div>
  <div class="h-button submit">提交</div>
  <button class="throttle" @click="submitClick">节流按钮</button>
  <details>
  <summary>Click Here to get the user details</summary>
      <table>
          <tr>
              <th>序号</th>
              <th>姓名</th>
              <th>地址</th>
              <th>工作</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Rose</td>
              <td>北京</td>
              <td>Web前端</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Jack</td>
              <td>上海</td>
              <td>产品测试</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Tom</td>
              <td>南京</td>
              <td>数据分析</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Jerry</td>
              <td>杭州</td>
              <td>网络安全</td>
          </tr>
      </table>
  </details>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
const tabList = reactive(["苹果", "西瓜", "葡萄", "樱桃"]);
const tabMark = ref(0);
const tabClick = (i: number) => {
  tabMark.value = i;
};
const obj: object = reactive({
  name: "小米",
  age: 18,
});
const submitClick = () => {
  console.log('点击了按钮')
  window.location.href = 'http://10.80.240.159:2000/#/fireHome'
}
</script>
<style lang="scss" scoped>
.tab {
  display: flex;
  .tab-item {
    font-size: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  .tab-item-active {
    color: skyblue;
  }
}
.content {
  margin-top: 20px;
  .rect {
    width: 200px;
    height: 200px;
    background: tomato;
    clip-path: polygon(100px 0, 0 200px, 200px 200px);
  }
  .triangle {
    margin-top: 20px;
    // width: 0px;
    // height: 0px;
    // // transparent 透明
    // border-top: 50px solid yellowgreen;
    // border-right: 50px solid deeppink;
    // border-bottom: 50px solid bisque;
    // border-left: 50px solid chocolate;

    width: 100px;
    height: 100px;
    // transparent
    background: linear-gradient(
      45deg,
      deeppink 0,
      deeppink 50%,
      yellowgreen 50%,
      yellowgreen 100%
    );
  }
}
.one-bg {
  width: 800px;
  height: 300px;
  background-image: radial-gradient(
    ellipse farthest-side at 40% 0%,
    #455a64 0%,
    #263238 60%,
    #1a2327 100%
  );
  display: flex;
  p {
    position: relative;
    margin: auto;
    font-size: 5rem;
    word-spacing: 0.2em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    color: transparent;
    background-color: #e8a95b;
    background-clip: text;
  }

  p::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 6rem,
      white 11rem,
      transparent 11.15rem,
      transparent 15rem,
      rgba(255, 255, 255, 0.3) 20rem,
      transparent 25rem,
      transparent 27rem,
      rgba(255, 255, 255, 0.6) 32rem,
      white 33rem,
      rgba(255, 255, 255, 0.3) 33.15rem,
      transparent 38rem,
      transparent 40rem,
      rgba(255, 255, 255, 0.3) 45rem,
      transparent 50rem,
      transparent 100%
    );
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 5s infinite linear;
  }

  @keyframes shine {
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: -190% 0;
    }
  }
}
.hello {
  position: relative;
  margin: auto;
  width: 120px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border: 2px solid gold;
  border-radius: 10px;
  background: gold;
  transition: all .3s;
  cursor: pointer;
  
  &:hover {
    filter: contrast(1.1);
  }
  
  &:active {
    filter: contrast(0.9);
  }
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid gold;
    transition: all .5s;
    animation: clippath 3s infinite linear;
    border-radius: 10px;
  }
  
  &::after {
    animation: clippath 3s infinite -1.5s linear;
  }
}

@keyframes clippath {
    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }
    25% {
      clip-path: inset(0 98% 0 0);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 98%);
    }
}

.h-button {
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.h-button::before,
.h-button::after {
  content: "";
  width: 0;
  height: 100%;
  position: absolute;
  filter: brightness(.9);
  background-color: inherit;
  z-index: -1;
}

.h-button::before {
  left: 0;
}

.h-button:after {
  right: 0;
  transition: width .5s ease;
}

.h-button:hover::before {
  width: 100%;
  transition: width .5s ease;
}

.h-button:hover::after {
  width: 100%;
  background-color: transparent;
}
.submit {
  width: 200px;
  height: 80px;
  color: #fff;
  line-height: 80px;
  text-align: center;
  background: #00baca;
  margin: 50px;
}
button {
  user-select: none;
}
.throttle {
  animation: throttle 2s step-end forwards;
}
.throttle:active {
  animation: none;
}
@keyframes throttle {
  from {
    pointer-events: none;
  }
  to {
    pointer-events: all;
  }
}

</style>
