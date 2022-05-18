type OmitByType<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] }

// 通过关键字映射，将不需要的字段返回never即可
