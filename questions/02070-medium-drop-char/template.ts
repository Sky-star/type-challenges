type DropChar<S extends string, C extends string> = S extends `${infer F}${infer L}` ? F extends C ? DropChar<L, C> : `${F}${DropChar<L, C>}` : S

// 对文字进行分组解构
// 判断是否是要替换的文字, 进行递归替换
