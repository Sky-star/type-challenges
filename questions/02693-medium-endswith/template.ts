type EndsWith<T extends string, U extends string> = T extends `${any}${U}` ? true: false
