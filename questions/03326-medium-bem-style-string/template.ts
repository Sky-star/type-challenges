type GetE<B extends string, E extends string[]> = E extends [any, ... infer L] ? GetE<`${B}__${E[0]}`, L extends string[] ? L : []> : B
type MyBEM<B extends string, E extends string[], M extends string[]> = M['length'] extends 0 ? GetE<B, E> : { [P in keyof M]: M[P] extends string ? `${GetE<B, E>}--${M[P]}` : '2' }[number]

// 首先构造B--E类型的类型
// 构造E__M的类型
// 最后用T[number]返回联合类型

// github 优化版 E 和 M 其实都是 接受一个字符串遍历数组并返回 __sring 或者 --string类型的
// 所以这里可以用一个方法来获取这两样数据

// 这里获取的结果为 __A | __B 这样的联合类型
type EmptyBEM<T extends any[], Prefix extends string> = [T[number]] extends [never] ? '' : `${Prefix}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${EmptyBEM<E, '__'>}${EmptyBEM<M, '--'>}`
