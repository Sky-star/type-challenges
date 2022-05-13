// 保证U中存在type, 并且T中有U中存在的type
// 由于U是联合类型，所以自动匹配一个符合则可以
type LookUp<U extends { type: string }, T extends U['type']> = U extends { type: T } ? U : never
