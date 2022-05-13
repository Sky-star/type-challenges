type TupleToUnion<T extends unknown[]> = T[number]

type t = TupleToUnion<[123, '456', true]>
