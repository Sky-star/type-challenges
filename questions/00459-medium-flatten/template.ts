type Flatten<T extends unknown[]> = T extends [infer F, ... infer L] ? F extends unknown[] ? [...Flatten<F>, ...Flatten<L>] : [F, ...Flatten<[L]>] : T

// infer 取值
// 判断第一位是否是数组 如果是进行扁平化处理
// 对后面的数组同时进行扁平处理
// 如果第一位不是，对后部分的数组进行扁平处理
