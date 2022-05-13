type Permutation<T, U = T> = [T] extends [never] ? [] : (T extends U ? [T, ...Permutation<Exclude<U, T>>] : [])

// 执行步骤
// 1. 将联合类型进行分发
// Permutation<A>  | Permutation<B> | Permutation<C>
// 依次判断 这里通过exclude来去重，进行再次排序
// ['A', ...Permutation] | ['B', ...Permutation] | ['C' ...Permutation]
