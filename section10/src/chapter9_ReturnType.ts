/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string 타입
type ReturnB = ReturnType<typeof funcB>; // number 타입

// ReturnType 직접 구현하기
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
