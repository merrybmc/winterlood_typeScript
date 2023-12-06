// 배열

// 배열 타입 정의 방법 1 (권장)
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'byeongmin'];

// 정의 방법 2
let boolArr: Array<boolean> = [true, false, true];
let nullArr: Array<null | undefined> = [null, undefined]; // union type

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello']; // union type

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]; // number 2차원 배열

// tuple
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
tup1 = [2, 3]; // 할당 가능
// tup1 = [1, 2, 3]; // 할당 불가능
// tup1 = ['a', 'b']; // 할당 불가능

let tup2: [number, string, boolean] = [1, '2', true];

// push, pop 가능
console.log(tup1);
tup1.push(3);
console.log(tup1);
tup1.pop();
tup1.pop();
console.log(tup1);

// 튜플 사용 예시
// 배열을 사용할 때 인덱스의 위치에 따라서 넣어야되는 값들이 이미 정해져 있고
// 순서를 지키는게 중요할 때 이런 식으로 튜플을 사용
const users: [string, number][] = [
  ['조병민', 1],
  ['이아무개', 2],
  ['김아무개', 3],
  ['박아무개', 4],
];
