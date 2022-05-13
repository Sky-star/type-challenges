type Last<T extends unknown[]> = T extends [...any, infer L] ? L : never
