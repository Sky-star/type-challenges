// 取T与K中的差集， 这部分差集是不需要处理的
// 增加K中需要添加readonly属性的
// & 交叉类型，用于合并类型
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in K]: T[P]
}
