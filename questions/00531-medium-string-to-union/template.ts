type StringToUnion<T extends string> = T extends `${infer F}${infer L}` ? L extends '' ? F : F|StringToUnion<L>: never
