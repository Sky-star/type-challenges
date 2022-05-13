type Diff<O, O1> = { [P in Exclude<keyof O | keyof O1, keyof O & keyof O1>]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never }

// 重点在于 key 要找出 O 和 O1的差集
