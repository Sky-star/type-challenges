type Reverse<T extends unknown[]> = T extends [infer F, ... infer L] ? [...Reverse<L>, F] : T

type xixixix = Reverse<['a', 'b']>
