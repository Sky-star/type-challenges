type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer Args) => infer F ? (...args: [...Args, A]) => F : Fn
