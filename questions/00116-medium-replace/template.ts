// 找到可以匹配替换的结构
// 判断需要替换的是否为空字符串,如果是则不进行替换
// 如果不是空字符串将 From 替换为 To
type Replace<S extends string, From extends string, To extends string> = S extends `${infer Front}${From}${infer Back}` ? From extends '' ? S : `${Front}${To}${Back}` : S
