type TupleToNestedObject<T extends any[], U> = T extends [infer F, ... infer L] ? { [P in F as T[0]]: TupleToNestedObject<L, U> } : U

type lslsl = TupleToNestedObject<['a', 'b', 'c'], number>

// 对 数组进行解构 进行递归返回即可
// 重点在于 如果取当前的key
// 解构后的F 不能直接使用，需要进行遍历后 直接取T[0]
