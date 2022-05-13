type LengthOfString<S extends string, A extends string[] = []> = S extends `${infer L}${infer P}` ? LengthOfString<P, [...A, L]> : A['length']
