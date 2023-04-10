
// class HYPromise {
//   constructor(executor) {
//     this.status = 'pendding'
//     const resolve = (value) => {
//       if (this.status === 'pendding') {
//         this.status = 'fulfilled'
//         queueMicrotask(() => {
//           console.log('调用了resolve')
//           this.onfulfilled(value)
//         })
//       }
//     }
//     const reject = (reason) => {
//       if (this.status === 'pendding') {
//         this.status = 'rejected'
//         queueMicrotask(() => {
//           console.log('调用了reject')
//           this.onrejected(reason)
//         })
//       }
//     }
//     executor(resolve, reject)
//   }
//   then(onfulfilled, onrejected) {
//     this.onfulfilled = onfulfilled
//     this.onrejected = onrejected
//   }
// }
// const promise = new HYPromise((resolve, reject) => {
//   console.log('pedding状态')
//   // resolve(11111)
//   reject(22222)
// }).then(res => {
//   console.log('res=====', res)
// }, err => {
//   console.log('err=====', err)
// })


class HYPromise {
  constructor(executor) {
    this.status = 'pendding'
    const resolve = (value) => {
      if (this.status === 'pendding') {
        this.status = 'fulfilled'
        queueMicrotask(() => {
          console.log('调用了resolve')
          this.onfulfilled(value)
        })
      }
    }
    const reject = (reason) => {
      if (this.status === 'pendding') {
        this.status = 'rejected'
        queueMicrotask(() => {
          console.log('调用了reject')
          this.onrejected(reason)
        })
      }
    }
    executor(resolve, reject)
  }
  then(onfulfilled, onrejected) {
    this.onfulfilled = onfulfilled
    this.onrejected = onrejected
  }
}
new HYPromise((resolve, reject) => {
  console.log('pendding状态')
  resolve(11111111)
  reject(22222222)
}).then(res => {
  console.log('res===', res)
}, err => {
  console.log('err===', err)
})