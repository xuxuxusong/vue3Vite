<template>
  <div id="page">
    <ul>
      <li
        ref="waterfallItem"
        v-for="(item, index) in waterfallArr"
        :key="index"
      >
        <img :src="item" />
      </li>
    </ul>
  </div>
</template>
<script>
// import { reactive, ref, onMounted } from "vue";
export default {
  data () {
    return {
      waterfallArr: [
        "https://weiliicimg9.pstatp.com/weili/l/461972764095807490.webp",
        "https://icweiliimg9.pstatp.com/weili/l/447251256884854785.webp",
        "https://icweiliimg6.pstatp.com/weili/l/165755629970653210.webp",
        "https://weiliicimg6.pstatp.com/weili/l/218593064967209016.webp",
        "https://icweiliimg6.pstatp.com/weili/l/320841925450530819.webp",
        "https://icweiliimg1.pstatp.com/weili/l/165755655736786957.webp",
        "https://icweiliimg1.pstatp.com/weili/l/452540045247774720.webp",
        "https://weiliicimg9.pstatp.com/weili/l/223888416044482620.webp",
        "https://icweiliimg9.pstatp.com/weili/l/292051943627161624.webp",
        "https://icweiliimg1.pstatp.com/weili/l/235158650747486283.webp",
        "https://weiliicimg1.pstatp.com/weili/l/165755681505542155.webp",
        "https://icweiliimg1.pstatp.com/weili/l/202821919289376781.webp",
        "https://weiliicimg9.pstatp.com/weili/l/611415730252415145.webp"
      ],
      array: [] //定义空数组存储元素高度
    }
  },
  created () {
    // WeakSet 只能存放对象数据类型, set 可以存放基本类型
    // const wset = new WeakSet()
    // const obj = []
    // wset.add(obj)
    const map = new Map()
    const obj = {
      name: 'xiaoming',
      age: 18
    }
    map.set(obj, 'haha')
    console.log(map)
    console.log(map.get(obj))
    console.log(map.has(obj))
    // console.log(map.delete(obj))
    // console.log(map.get(obj))
    map.forEach((value, key) => {
      console.log(value, key)
    })
    
    console.log(Object.entries(obj))
    console.log(Object.fromEntries(Object.entries(obj)))
    const arr = [1, 2, [3, 4], [[5, 6]]]
    console.log(arr.flatMap(2))
  },
  mounted () {
    setTimeout(() => {
      this.getWaterfall()
    })
  },
  methods: {
    getWaterfall() {
      let columns = 2; //定义布局的列数为2
      let item = this.$refs.waterfallItem; //获取每个子元素的DOM
      // console.log("item", item);
      for (let i = 0; i < item.length; i++) {
        //遍历整个子元素的DOM集合
        if (i < columns) {
          //小于columns的子元素作为第一行
          item[i].style.top = 10 + "px";
          item[i].style.left = item[0].clientWidth * i + "px";
          // console.log("offsetWidth", item[0].clientHeight);
          this.array.push(item[i].clientHeight); //遍历结束时，数组this.array保存的是第一行子元素的元素高度
          // console.log("this.array", this.array);
        } else {
          //大于等于columns的子元素将作其他行
          let minHeight = Math.min(...this.array); //  找到第一列的最小高度
          let index = this.array.findIndex((item) => item === minHeight); // 找到最小高度的索引
          //设置当前子元素项的位置
          item[i].style.top = this.array[index] + 10 + "px";
          item[i].style.left = item[index].offsetLeft + "px";
          //重新定义数组最小项的高度 进行累加
          this.array[index] += item[i].clientHeight;
          // console.log("this.array[index]", this.array[index]);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#page {
  width: 100vw;
  height: 100vh;
  background-color: #0f0;
  color: #333;
  text-align: center;
  font-size: 20px;
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    li {
      width: 50%;
      height: auto;
      padding: 10px;
      font-size: 14px;
      position: absolute;
      box-sizing: border-box;
      margin: 0 0 10px 0;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
        height: auto;
      }
    }
  }
}
</style>
