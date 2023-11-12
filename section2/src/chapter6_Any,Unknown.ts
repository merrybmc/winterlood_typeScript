// any
// 특정 변수의 타입을 확실히 모를 때
// 모든 타입의 값을 할당받을 수 있다.
// 모든 타입의 변수에 anyType의 값을 할당 가능
let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// 모든 타입의 값을 할당받을 수 있다.
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// 연산, 메서드 사용 불가능
unknownVar.toUpperCase();

// 다른 변수에 unknownVar의 값을 할당 불가능
num = unknownVar;
