interface Dic {
  'A': 'a'
  'B': 'b'
  'C': 'c'
  'F': 'f'
}
type KebabCase<S extends string, R extends string = ''> = S extends `${infer F}${infer L}` ?
  F extends keyof Dic ?
    KebabCase<L, `${R}${R extends '' ? '' : '-'}${Dic[F]}`> :
    KebabCase<L, `${R}${F}`>
  : R

type lalal = KebabCase<'ABC'>

// 用 B 记录第一个字符之前是否存在其他字符
// 逐字判断 如果第一个字符 与 大写后的自己相等，则代表自己是大写字符
// 将判断好的数据添加到结果中， 重点就是 - 的问题,判断一下就好了
