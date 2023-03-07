function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]) {

}

foo<number, string, boolean>(100, 'abc', true, 11, 111, 1111);
foo(10, ['abc']);

export { }; 
