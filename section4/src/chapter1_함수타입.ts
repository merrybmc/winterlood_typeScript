/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고 어던 결과값을 반환하는지
// 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지
// function funcSum(a: number, b: number): number {
//   return a + b; // number + number이기 때문에 자동으로 타입 추론
// }
function funcSum(a: number, b: number) {
  return a + b; // number + number이기 때문에 자동으로 타입 추론
}

/**
 * 화살표 함수의 타입을 정의
 */

// 반환값은 자동으로 타입 추론
// const arrowSum = (a: number, b: number): number => a + b;
const arrowSum = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 파라미터의 기본값을 기준으로 타입 추론
// name = 필수 매개변수, tall = 선택적 매개변수
// 필수 매개변수가 선택적 매개변수보다 뒤에 있으면 에러 발생
// function introduce(name = '조병민', tall?: number, age: number) {
//   console.log(`name : ${name}`);
//   console.log(`tall : ${tall}`);
// }
function introduce(name = '조병민', age: number, tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce('조병민', 30, 176); // 조병민, 176
introduce('조병민', 30); // 조병민, undefined

// rest Parameter
function getSum(num1: number, num2: number, ...sum: number[]) {
  console.log(num1 + num2 + sum.reduce((a, b) => a + b));
}

getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// rest Parameter의 개수를 고정하고 싶을 때 tuple타입 사용
function getSum2(num1: number, num2: number, ...sum: [number, number]) {
  console.log(num1 + num2 + sum.reduce((a, b) => a + b));
}

getSum(1, 2, 3, 4);
