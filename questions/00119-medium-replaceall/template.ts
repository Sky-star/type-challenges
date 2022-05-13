type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer Front}${From}${infer Back}` ? From extends '' ? S :
  `${Front}${To}${ReplaceAll<`${Back}`, From, To>}`: S

type sss = ReplaceAll<'foboorfoboar', 'bo', 'b'>
