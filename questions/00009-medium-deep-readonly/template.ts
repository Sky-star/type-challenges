// 终结条件，如果是函数的话需要直接返回，其他类型
// type DeepReadonly<T> = T extends Function ? T : {
//   readonly [P in keyof T]: DeepReadonly<T[P]>
// }

// 添加readonly， 判断是否有子节点， 如果没有直接返回， 如果有继续递归调用就可以了
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P]: DeepReadonly<T[P]>
}
