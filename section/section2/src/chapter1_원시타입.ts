// 원시타입

// number 타입
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// Error
// num1 = 'Hello';

// string 타입
let str1: string = 'hello';
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// Error
// str1 = 123;

// Boolean 타입
let bool1: boolean = true;
let bool2: boolean = false;

// null 타입
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

// null 타입이 아닌 값에 null 넣기 (strictNullChecks)
let numA: number = null;

// 리터럴 타입
// 변수의 타입을 값 그 자체로 정의
let numB: 10 | 20 = 10;
let strA: 'hello' = 'hello';
let boolA: true = true;
