type Unique<T extends unknown[], R extends unknown[] = []> = T extends [infer F, ... infer L] ?
  Includes<R, F> extends true ?
    Unique<L, R>
    : Unique<L, [...R, F]> :
  R
