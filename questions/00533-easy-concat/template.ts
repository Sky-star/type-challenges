type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// type FirstElement<T> = T extends [infer F, ... infer _R] ? F : never
// type LastElement<T> = T extends [... infer _R, infer L] ? L : never
