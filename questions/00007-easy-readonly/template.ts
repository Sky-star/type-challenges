// 1. 读取所有的key
// 2. 添加readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// Readonly 代表对象中的所有属性是不允许被更改的
// type User = {
//   readonly name: string
// }

// const xiaohong: User = {
//   name: 'xiaohong',
// }

// xiaohong.name = 'adsf'

// js
// function myReadonly(obj) {
//   let result = {}
//   for (const key in obj)
//     result[`readonly${key}`] = obj[key]

//   return result
// }
