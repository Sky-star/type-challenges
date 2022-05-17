type MyMerge<T> = { [P in keyof T]: T[P] }

type PartialByKeys<T, K extends keyof T | 'unknown' = keyof T> = MyMerge<{
  [k in Exclude<keyof T, K>]: T[k];
} & {
  [key in keyof T as key extends K ? key : never ]?: T[key];
}>

// 先将无需更改的key的数据提取出来
// 将需要更改的key单独提取出来
// 取交叉类型后，逐个遍历并合并成一个对象即可
