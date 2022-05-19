type Flip<T extends Record<string, any>> = {
  [P in keyof T as `${T[P]}`]: P
}

type xixixi = Flip<{ pi: 3.14; bool: true }>
