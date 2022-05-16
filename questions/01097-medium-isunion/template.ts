type IsUnion<T, U = T> = T extends U ? [U] extends [T] ? false : true : never

// 联合类型在extends前会分发每个类型并将最后的结果联合判断
// 需要注意的是 string|'a' 这样能够包含其他联合类型的， 会被合并成string
// [U] extends [T] 就是为了判断非union类型的， 如果非union类型会相等， union类型不会相等
// true | true false| false 这种的结果会被合并成一个
