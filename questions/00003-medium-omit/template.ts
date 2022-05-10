type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 取 keyof T 和 K 的差集, 差集就是我们需要的那个数据
// 遍历差集中的key组合成对象
// 这里涉及到 as 重映射键名

// as进行的操作
// 每遍历一次的时候判断是否在K中, 如果在则忽略掉，否则就是我们要的键名
