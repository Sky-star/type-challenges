// 1. 返回对象
// 2. 遍历数组，根据数组中元素构造键值对
// 3. 遍历数组用T[number]
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// js
// function tupleToObject(array) {
//   const obj = {}

//   array.forEach((val) => {
//     obj[val] = val
//   })
//   return obj
// }

const array = [1, 2, '123'] as const

type r = typeof array

// 字面量类型
// 通过 as const
// 将声明成的const的对象转换为类型后，则变为字面量类型
// 就是他本身的值就是他本身的类型， 值 = 类型
