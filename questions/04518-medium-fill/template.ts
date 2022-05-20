type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  U extends unknown[] =[],
> = T extends [infer F, ... infer L] ? Start extends End ? [...U, ...T]
  : U['length'] extends Start ? Fill<L, N, Add<Start, 1> & number, End, [...U, N]>
    : Fill<L, N, Start, End, [...U, F]>
  : U

// 创建数字转数组和加法类型 详情4182
// 逻辑为 从start开始向后移动指针 如果 start = end 代表走完了, 返回 [...U, ...T]
// 如果U['length'] < start 代表不需要替换 Fill<L, N, Start, End, [...U, F]>
// 如果U['length'] = start  将 start += 1, 对应的数据进行替换，并且在结果数组中添加替换的数字
// 这时， 如果 L 中还有元素存在，还会进入到上一步的操作中， 因为 start +1， U['length'] +1了,还是相等的