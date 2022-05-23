type Trunc<T extends string | number> = `${T}` extends `${infer F}.${any}` ? F : `${T}`
