type IsTuple<T> = [T] extends [never] ? false : T extends [] ? true : T extends Readonly<[infer _F, ... infer _R]> ? true : false

// 判断never
// 判断数组类型
// 判断readonly
// 如果用T['length'] extends number 是必然成立的
// 所以要用这个得反着来 number extends T['length']
