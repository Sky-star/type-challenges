type RequiredByKeys<T, K extends keyof T | 'unknown' = keyof T> = MyMerge< { [P in Exclude<keyof T, K>]: T[P] } & {
  [P in keyof T as P extends K ? P: never]: T[P]
} >

// 同理 02757
