// 배열 타입 정의
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'byeongmin'];

//Generic 문법 정의
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'Hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 튜플
// 길이와 타입 고정된 배열
// 길이가 다르거나 값의 순서를 다르게 넣으면 에러 발생
// 튜플을 사용할 땐 배열 메서드 사용에 주의
// push, pop을 통해 배열의 길이가 에러가 발생하지 않음
let tup1: [number, string] = [1, 'hello'];

// 튜플 사용 적절한 예시
const users: [string, number][] = [
  ['조병민', 1],
  ['홍길동', 2],
  ['김철수', 3],
];
