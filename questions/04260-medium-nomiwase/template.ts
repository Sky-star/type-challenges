type String2Union<S extends string> = S extends `${infer C}${infer REST}` ? C | String2Union<REST> : never

type AllCombinations<STR extends string, S extends string = String2Union<STR>> = [S] extends [never]
  ? ''
  : '' | { [K in S]: `${K}${AllCombinations<never, Exclude<S, K>>}` }[S]

// 思路
// 创建string转化为联合类型的方法
// 判断转为联合类型的是否是never如果是则返回''
// 构造 '' 的情况， 核心逻辑为 构造一个对象为基础 利用联合类型分配特性 构造数据
type AllCombinationsTest = AllCombinations<'ABC'>
