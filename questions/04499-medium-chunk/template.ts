type Chunk<T extends unknown[], N extends number = 1, R extends unknown[] = [], B extends unknown[] = GetArray<T, N>> = B extends [] ? R: T extends [...B, ... infer L] ? Chunk<L, N, [...R, B]> : R

type GetArray<T extends unknown[], N extends number, R extends unknown[] = []> = N extends R['length'] ? R :
  T extends [infer F, ...infer L] ? GetArray<L, N, [...R, F]> : R

type real = Chunk<[1, true, 2, false], 2>

// 首先构造一个能够将数组分割的类型
// 再将原数组分割，递归调用
