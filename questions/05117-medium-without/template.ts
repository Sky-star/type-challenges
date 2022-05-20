type Without<T extends unknown[], U extends unknown[] | number, R extends unknown[] = []> = T extends [infer F, ... infer L] ?
  U extends unknown[] ? F extends U[number] ? Without<L, U, [...R]> : Without<L, U, [...R, F] > : F extends U ? Without<L, U, [...R]> : Without<L, U, [...R, F] > : R

type result = Without<[1, 2], 1>
