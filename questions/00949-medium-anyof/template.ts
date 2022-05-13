type IsTrue<T> = T extends Record<string, never> | [] | 0 | '' | false ? true : false
type AnyOf<T extends readonly any[]> = IsTrue<T[number]> extends true ? false : true
