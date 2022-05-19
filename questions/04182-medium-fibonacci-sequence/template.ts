type Fibonacci<T extends number, C extends number = 2, P extends number = 0, S extends number =1> = T extends 1 | 2
  ? 1
  : T extends C
    ? Add<P, S>
    : Fibonacci<T, Add<C, 1> & number, S, Add<P, S> & number>

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// 实际返回在斐波那契数列数组中对应长度的数是什么 FibArr[3] = 2, FibArr[8] = 21
// 解题思路
// 一个类型用来构造根据给的数来创建对应长度的数组并返回长度
// 一个类型用来做加法 比如[1] + [1,1] = [1,1,1]

type NumberToArray<N extends number, C extends number[] = []> = C['length'] extends N ? C : [...NumberToArray<N, [...C, 0]>]

type Add<N extends number, X extends number> = [...NumberToArray<N>, ...NumberToArray<X>]['length']
