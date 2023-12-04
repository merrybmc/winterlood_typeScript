/**
 * 분산적인 조건부 타입
 */

type StringNumberSwich<T> = T extends number ? string : number;

let a: StringNumberSwich<number>;
let b: StringNumberSwich<string>;

let c: StringNumberSwich<number | string>;
// === stringNumberSwitch<number> ,  stringNumberSwitch<string>

let d: StringNumberSwich<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 3단계
// number | string | number
// => number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 3단계
// number | never | boolean

// 4단계
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 3단계
// never | string | never

// 4단계
// string
