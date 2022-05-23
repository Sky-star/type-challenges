type IndexOf<T extends unknown[], S, U extends unknown[] = []> = T extends [infer F, ... infer L] ? Equal<S, F> extends true ? U['length'] : IndexOf<L, S, [...U, any]> : -1
