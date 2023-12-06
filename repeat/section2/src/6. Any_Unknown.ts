// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 아무 변수나 할당 가능
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => {};

// 아무 메서드나 사용 가능
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

let num1 = 10;

// unknown
// 아무 연산이나 메서드나 변수에 값을 넣을 수 없기 때문에
// 런타임 에러가 발생할 수 있는 any 타입보다는 훨씬 나음 (any보단 권장)
// 아무 변수나 할당 가능
let unknownVar: unknown = 10;
unknownVar = 'hello';
unknownVar = true;
unknownVar = {};
unknownVar = () => {};

unknownVar = num1;

// 아무 메서드나 사용 불가능
// unknownVar.toUpperCase(); // error
// unknownVar.toFixed(); // error
