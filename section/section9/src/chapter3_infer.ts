/**
 * infer
//  * inference의 약자 = 추론하다.
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // never

type ReturnType2<T> = T extends () => infer R ? R : never;

type C = ReturnType2<FuncA>; // string

type D = ReturnType2<FuncB>; // number

type E = ReturnType2<number>; // never

type F = ReturnType2<any>; // unknown
