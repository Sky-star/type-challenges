type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ?
  Equal<F, U> extends true ? true : Includes<R, U>
  : false

// 将数组数据进行拆解 获取第一个元素 以及剩余的元素
// 将第一个元素与U进行equal判断
// 剩余数组进行递归判断
