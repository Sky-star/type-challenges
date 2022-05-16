type RemoveIndexSignature<T> = { [P in keyof T as P extends `${infer K}` ? K : never]: T[P] }

// 通过 as 进行key的替换或者过滤
// 通过 infer 进行类型推断, 根据定义 模板字面量是已字符串字面量为基础构建的
// infer 只能推断出特殊的类型而不是索引签名的类型也就是string 或者number
// 具体讲解地址
// https://github.com/type-challenges/type-challenges/issues/3542
