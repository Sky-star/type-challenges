// 判断是否有加减号
type isEmpty<A extends string> = A extends '+' | '-' ? A : ''
// 获取值
type GetValue<A extends string> = A extends `${isEmpty<infer L>}${infer F}` ? [L, F]: ['', A]
// 进行对应部分的解构
type PercentageParser<A extends string> = A extends `${infer R}%` ? [...GetValue<R>, '%'] : [...GetValue<A>, '']
