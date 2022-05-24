type Combination<T extends string[]> = Combine<T[number]>
type Combine<T extends string, Copy extends string = T, Res extends string = ''>
  = T extends T
    ? [Exclude<Copy, T>] extends [never]
        ? Res extends ''
          ? T
          : `${Res} ${T}`
        : Combine<Exclude<Copy, T>, Exclude<Copy, T>, Res extends '' ? Res | T : (Res | `${Res} ${T & string}`)>
    : never

type xixilili = Combination<['foo', 'bar', 'baz']>

// 构造组合类型
// 利用union的分发类型 进行数据处理
// exclude 剔除当前类型 判断res == '' ? T : `${Res} ${T}`
// exclude后有数据进行递归
// 核心代码 Res extends '' ? Res | T : (Res | `${Res} ${T & string}`)
