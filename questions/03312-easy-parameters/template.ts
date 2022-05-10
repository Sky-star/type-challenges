type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer x) => any ? x : []

// 通过 infer 来声明变量 并将能够获取的变量返回即可
