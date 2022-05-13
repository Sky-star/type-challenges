// type TrimL<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimL<R> : S
// type TrimR<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}` ? TrimR<R> : S

// type Trim<S extends string> = TrimL<TrimR<S>>

// 总体思路就是先去除左边的，在去除右边的

type Space = `${' ' | '\n' | '\t'}`

type Trim<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S
