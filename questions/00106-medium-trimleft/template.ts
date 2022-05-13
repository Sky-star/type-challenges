// 字符串解构 是否由空字符串开始， 用infer R 代替剩余部分
// 递归调用
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S
