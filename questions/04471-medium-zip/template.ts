type Zip<T extends unknown[], U extends unknown[] > = Fillter<AllZip<T, U>>

type AllZip<T extends unknown[], U extends unknown[]> = {
  [P in keyof T]: [T[P], P extends keyof U ? U[P] : undefined]
}

type Fillter<T extends unknown[]> = T extends [...infer L, infer F] ? F extends [any, undefined] ? L : T : T

// 先将所有组合已 T 的长度为基准构造出来数据
// 将每个元素都有的数据组合在一起
// 将含有undefined过滤掉
// T['length'] > U['length'] 则会出现末尾元素 存在undefined的情况， 过滤掉即可
// T['length'] < U['length'] 直接返回即可

type relss = Zip<[1, 2, 3], ['1', '2']>
