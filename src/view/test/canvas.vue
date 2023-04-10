<template>
  <!-- <div>
    <img :src="imgUrl" alt="">
  </div> -->
  <canvas ref="canvas" id="c" width="300" height="200" style="border: 1px solid pink;"></canvas>
</template>
<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import url from '../../assets/images/1.png'
  const imgUrl = ref(url)
  const canvas = ref()
  // const cnv = document.getElementById('c')
  // const cxt = cnv.getContext('2d')
  onMounted(() => {
    // 获取canvas上下文对象
    const cxt = canvas.value.getContext('2d')
    // const cnv = document.getElementById('c') // 获取canvas对象
    // const cxt = cnv.getContext('2d') // 获取canvas上下文对

    // cxt.beginPath()
    // cxt.strokeStyle = 'pink' // 修改直线的颜色
    // cxt.lineWidth = 10 // 修改直线的宽度
    // cxt.lineCap = 'round' // 默认: butt; 圆形: round; 方形: square
    // cxt.moveTo(100, 100.5) // 起点坐标
    // cxt.lineTo(200, 100.5) // 终点坐标
    // cxt.stroke() // 将起点和终点连接起来

    // 矩形 
    // cxt.lineWidth = 10
    // cxt.strokeStyle = 'pink' // 修改直线的颜色/
    // cxt.moveTo(50, 50)
    // cxt.lineTo(200, 50)
    // cxt.lineTo(200, 150)
    // cxt.lineTo(50, 150)
    // cxt.lineTo(50, 50)
    // cxt.closePath() // 手动闭合
    // cxt.stroke()
    
    // 使用 strokeRect() 描边矩形
    // cxt.strokeStyle = 'pink'
    // cxt.strokeRect(50, 50, 200, 100)
    // cxt.stroke()

    // 使用 fillRect() 填充矩形
    // cxt.strokeStyle = 'orange'
    // cxt.lineWidth = 10
    // cxt.strokeRect(50, 50, 200, 100)
    // cxt.fillStyle = 'pink'
    // cxt.fillRect(50, 50, 200, 100)

    // 使用 rect() 生成矩形
    // cxt.strokeStyle = 'orange'
    // cxt.fillStyle = 'pink'
    // cxt.rect(50, 50, 200, 100)
    // cxt.fill() // 填充
    // // cxt.clearRect(60, 60, 180, 90) // 使用 clearRect() 清空指定区域内的矩形
    // cxt.stroke() // 绘制

    // 绘制圆形
    // cxt.beginPath()
    // cxt.strokeStyle = 'pink'
    // cxt.arc(100, 100, 50, 0, 150 * Math.PI / 180)
    // cxt.closePath()
    // cxt.stroke()

    // 拐角 虚线
    // cxt.beginPath()
    // cxt.lineWidth = 10
    // cxt.strokeStyle = 'pink'
    // cxt.lineJoin = 'bevel'
    // cxt.setLineDash([10])
    // cxt.moveTo(50.5, 50.5)
    // cxt.lineTo(150.5, 50.5)
    // cxt.lineTo(150.5, 150.5)
    // cxt.stroke()

    // 文字
    // cxt.font = '60px Arial'
    // cxt.strokeStyle = 'pink'
    // let text = '雷猴'
    // cxt.strokeText(text, 30, 90)
    // // cxt.fillStyle = 'pink'
    // // cxt.fillText('雷猴', 30, 90)
    // console.log(cxt.measureText(text).width)

    // 图片
    const img = new Image() // 创建图片对象
    img.src = url
    img.onload = () => {
      cxt.drawImage(img, 30, 30, 60, 60)
    }
  })
</script>
<style scoped>
.box {
  width: 400px;
  height: 400px;
  background: salmon;
}
</style>