// 通过判断空数组类型
// type First<T extends any[]> = T extends [] ? never : T[0]

// 通过length判断
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// extends union 判断
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// infer 判断 其实类似于的js的解构操作 const [first, ...rest] = [1,2,3]
type First<T extends any[]> = T extends [infer First, ... infer _Rest] ? First : never

// extends 类型条件判断
// 获取tuple的length的属性
// extends union 判断的规则
// infer 的使用

// 如果是空数组是 [0] 是undefined
type t1 = First<[]>
