type ObjectEntries<T> = {
  [P in keyof T]-?: [P, T[P] extends infer R | undefined ? R : T[P]]
}[keyof T]

// 对 对象 进行取值操作 T[keyof T] 这样取出来的值是一个联合类型
// 对 对象 内部的key进行去 -？ 操作
// 处理一下 T[P] 所对应的联合类型即可
