type MyFlatten<T extends unknown[]> = T extends [infer F, ...infer L] ? F extends unknown[] ? [...F, ...FlattenDepth<L>] : [F, ...FlattenDepth<L>]: T
type FlattenDepth<T extends unknown[], U extends number = 1, R extends unknown[] = []> = R['length'] extends U ? T : R['length'] extends T['length'] ? T : FlattenDepth<MyFlatten<T>, U, [1, ...R] >

type lalalala = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>

// 先写一个解构一层数组的方法
// 用一个数组记录已经解构的层数
// 判断上限，如果已解构层数和当前的数组长度响度则代表全部解构完成
