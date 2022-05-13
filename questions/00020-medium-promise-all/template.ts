// 由于typeof 的关系, 需要接收 readonly 的数组
// 关键点在于返回 需要对T进行遍历,并判断该元素是否是promise类型，如果是则通过 infer 将类型获取，并返回即可
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [ K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>

const promiseAllTest1 = PromiseAll([1, 2, Promise.resolve(3)] as const)

type tt = typeof promiseAllTest1

type ts = Promise<[1, 2, 3]>
