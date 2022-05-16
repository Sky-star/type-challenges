type NumbeToArray<T extends number, U extends any[] = []> = U['length'] extends T ? U : NumbeToArray<T, [1, ...U]>

type MinusOne<T extends number, R extends number[] = NumbeToArray<T>> = R extends [any, ...infer L] ? L['length'] : 0

// 所谓的-1操作, 就是对应的数字转换成与数字相等长度的数组
// 既 5 => [1,1,1,1,1]
// 再对数组进行解构, 获取剩下个数组的长度 就是-1
// 由于递归太深的问题， 只能支持到1000, 再深就爆掉了
