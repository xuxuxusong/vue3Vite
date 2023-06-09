import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // indexPath: 'index.html',
  // publicPath: './',
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  },
  server: {
    host: '0.0.0.0', // ip地址
    port: 80, // 设置服务启动端口号
    open: true // 设置服务启动时是否自动打开浏览器
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, "src") }
    ]
  },
  base: "/vue3Vite/"
})
