/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;

// Extract 타입 직접 구현하기
type Extract<T, U> = T extends U ? T : never;
