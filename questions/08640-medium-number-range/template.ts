type NumberRange<L extends number, H extends number> = Exclude<StartTuple<H>, StartTuple<L>> | H

type StartTuple<N extends number, R extends unknown[] = []> = N extends R['length'] ? R[number] : StartTuple<N, [...R, R['length']]>
