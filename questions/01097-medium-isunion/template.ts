type IsUnion<T, U = T> = T extends U ? [U] extends [T] ? false : true : never

type lalala = IsUnion<string, string|'a'>

// 这里会执行成 IsUnion<string,string|'a'> | IsUnion<'a',string|'a'>

// IsUnion<string,string|'a'> 中 T = string, U = string|'a'
type r1 = string extends string|'a' ? true: never // true 会走到下一步

type r2 = [string|'a'] extends [string] ? false : true // false

// 到这里第一步的结果为 false

// IsUnion<'a'> 中 T = 'a', U = string|'a'
type r3 = 'a' extends string|'a' ? true : never // true 会走到下一步

type r4 = [string|'a'] extends ['a'] ? false : true // false

// 最后的结果就是 false | true = false

type lalalaa = IsUnion<string|number>

// 这里会执行成 IsUnion<string,string|number> | IsUnion<'a',string|number>

// IsUnion<string,string|number> 中 T = string, U = string|number
type r5 = string extends string|number ? true: never // true 会走到下一步

type r6 = [string|number] extends [string] ? false : true // true

// 到这里第一步的结果为 true

// IsUnion<'a'> 中 T = 'a', U = string|'a'
type r7 = number extends string|number ? true : false // true 会走到下一步

type r8 = [string|number] extends [number] ? false : true // true

// 最后的结果就是 true | true = true
