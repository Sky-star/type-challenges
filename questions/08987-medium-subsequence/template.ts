type Subsequence<T> = T extends [infer F, ...infer L]
  ? [F] | [...Subsequence<L>] | [F, ...Subsequence<L>]
  : []
type xalsd = Subsequence<[1, 2, 3]>
