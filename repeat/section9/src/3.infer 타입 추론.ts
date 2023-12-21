type FuncA = () => string;
type FuncB = () => number;
type ReturnType<T> = T extends () => string ? string : never;
type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
