import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible/index.js'

createApp(App).use(router).mount('#app');

(function (doc, win) {
  const docEl = doc.documentElement
  const size = 1920
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 16 * (clientWidth / size) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

