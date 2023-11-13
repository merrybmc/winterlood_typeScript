/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 정의하는 방법
 * -> 하나의 함수 Func
 * -> 모든 매개변수의 타입 number
 * -> 매개변수가 1개 있을 때 -> 이 매개변수에 20을 곱한 값을 출력
 * -> 매개변수가 3개 있을 때 -> 매개변수들을 모두 다 더한 값을 출력
 */

// 함수 버전들
// -> 1. 오버로드 시그니처 = 함수 내부의 구현부 작성 없이 선언만 한 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// -> 2. 구현 시그니처 = 함수의 실제 구현부가 있을 때
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
    return;
  }
  console.log(a + 20);
}

func(1);
func(1, 2, 3);
