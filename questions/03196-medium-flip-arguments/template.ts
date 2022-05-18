type FlipArguments<T> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R: T

// 其实就是对参数数组进行翻转
