type Shift<T extends unknown[]> = T extends [any, ... infer R] ? [...R] : []
