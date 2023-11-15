/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;

// Exclude 타입 직접 구현하기
type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean>
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 3단계
// string | never

// 4단계
// string
