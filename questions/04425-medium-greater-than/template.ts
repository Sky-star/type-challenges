type GreaterThan<T extends number, U extends number> = T extends U ? false : Exclude<NumberToUnion<T>, NumberToUnion<U>> extends never ? false: true

type NumberToUnion<T extends number, R extends number[] = []> = T extends R['length'] ? R[number] : NumberToUnion<T, [...R, R['length']]>

// 构造一个数字转数组的的类型 并将数组转化为联合类型
// 将联合类型用exclude判断， 如果有值就是大于 never就是小于

// github上的思路
// 构造一个数字转数组的类型
// 用 extends构造的方法判断 T 是否包含 U
// type GreaterThan<T extends number, U extends number> =
//   NTulpe<T> extends [...NTulpe<U>, ...infer Other]
//   ? Other extends [] ? false : true
//   : false

// type NTulpe<T extends number, U extends any[] = []> =
//   U['length'] extends T ? U : NTulpe<T, [...U, any]>
