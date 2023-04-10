// const obj = {
//   name: 'halo',
//   age: 18
// }
// const newObj = new Proxy(obj, {
//   get: function (target, key) {
//     console.log('调用了get方法')
//     return target[key]
//   },
//   set: function (target, key, newValue) {
//     console.log('调用了set方法')
//     if (key === 'age' && newValue > 200) {
//       throw new RangeError('设置的年龄太大了')
//     } else {
//       return target[key] = newValue
//     }
//   }
// })
// console.log(newObj.age)
// newObj.age = 300


// let products = new Proxy(
//   [
//     { name: "Firefox", type: "browser" },
//     { name: "SeaMonkey", type: "browser" },
//     { name: "Thunderbird", type: "mailer" },
//   ],
//   {
//     get: function (obj, prop) {
//       console.log('30====', prop)
//       // 默认行为是返回属性值，prop ?通常是一个整数
//       if (prop in obj) {
//         return obj[prop];
//       }
//       // 获取 products 的 number; 它是 products.length 的别名
//       if (prop === "number") {
//         return obj.length;
//       }
//       let result,
//         types = {};
//       for (let product of obj) {
//         if (product.name === prop) {
//           result = product;
//         }
//         if (types[product.type]) {
//           console.log('aaaaaaaaa')
//           types[product.type].push(product);
//         } else {
//           console.log('here', product.type)
//           types[product.type] = [product];
//           console.log('51====', types)
//         }
//       }
//       // 通过 name 获取 product
//       if (result) {
//         return result;
//       }
//       // 通过 type 获取 products
//       if (prop in types) {
//         return types[prop];
//       }
//       // 获取 product type
//       if (prop === "types") {
//         console.log('0000')
//         return Object.keys(types);
//       }
//       return undefined;
//     },
//   }
// );

// // console.log(products[0]); // { name: 'Firefox', type: 'browser' }
// // console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
// // console.log(products["Chrome"]); // undefined
// // console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
// console.log(products.types); // ['browser', 'mailer']
// // console.log(products.number); // 3

const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}
// console.log(Reflect.has(duck, 'color'))
// Reflect.deleteProperty(duck, 'name')
// console.log(Reflect.getOwnPropertyDescriptor(duck, 'name'))
// console.log(Reflect.getPrototypeOf(duck))
// Reflect.defineProperty(duck, 'name', {value: 'hhhhh'})
// console.log(Math.floor(1.75));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111111)
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22222)
  }, 500)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 3000)
})
// all方法：当所有结果都为fulfilled 时返回一个数组，当有出现一个结果为rejected时会立即返回这个值
// Promise.all([p1, p2, p3]).then((res, err) => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
// allSettled方法：无论结果为什么都会全部执行，并返回一个数组对象
// Promise.allSettled([p1, p2, p3]).then((res, err) => {
//   console.log('res===', res)
// }).catch(err => {
//   console.log('err===', err)
// })
// race方法：当出现一个结果时就立即执行，无论结果是成功或是失败
// Promise.race([p1, p2, p3]).then(res => {
//   console.log('race-res=====', res)
// }).catch(err => {
//   console.log('race-err=====', err)
// })
// any方法：等到一个fulfilled状态，才会决定新Promise的状态，如果所有的结果都是reject的，那么也会等到所有的Promise都变成rejected状态
// Promise.any([p1, p2, p3]).then(res => {
//   console.log('any-res=====', res)
// }).catch(err => {
//   console.log('any-err=====', err)
// })


// 防抖与节流
// 防抖：n秒后再执行，若是在n秒内重复触发，则重新计时，例：电梯里进来一个人，等待15秒后运行，若在这15秒中又进来一个人，则重新计时15秒
const debounce = function (fn, delay) {
  setTimeout(() => {
    fn()
  }, delay)
}
// 节流：n秒内只执行一次，不管在这个时间内触发多少次，例：电梯进来一个人，等待15秒后运行，不管中途又进来几个人