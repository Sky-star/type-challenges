// ts 联合类型 union
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}

// js
// 对比学习法
// function myPick(todo, keys) {
//   let obj = {}
//   keys.forEach((key) => {
//     if (key in todo)
//       obj[key] = todo[key]
//   })
//   return obj
// }

// 1. 返回一个对象
// 2. 遍历foreach maped
// 3. todo[key] 取值 indexed
// 4. 看看 key 在不在todo中
