type LastIndexOf<T extends unknown[], U> = T extends [... infer L, infer F] ? Equal<F, U> extends true ? L['length'] : LastIndexOf<L,U> : -1
