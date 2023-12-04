import { hello } from './../../section1/src/test';
/**
 * 원시 타입
 * 하나의 값만 저장하는 타입
 * - number
 * - string
 * - boolean
 * - null
 * - undefined
 */

// number 타입
// 숫자를 포함하는 모든 값
// :type 방식을 타입 주석, 영어로는 annotation(어노테이션) 이라고 부름
let num1: number = 123; // 양수
let num2: number = -123; // 음수
let num3: number = 0.123; // 양의 소수
let num4: number = -0.123; // 음의 소수
let num5: number = Infinity; // 양의 무한대
let num6: number = -Infinity; // 음의 무한대
let num7: number = NaN; // 숫자가 아닌 것 Not a Number

num1 = 456; // 숫자만 할당 가능
// num1 = 'hello'; // 숫자말고 다른 타입은 할당 불가능

// string 타입
let str1: string = 'hello'; // 기본
let str2: string = `hello`; // 백틱
let str3: string = `hello ${num1}`; // 템플릿 리터럴

str1 = 'world'; // 문자만 할당 가능
// str1 = 123; // 문자말고 다른 타입은 할당 불가능

str1.toUpperCase(); // 문자열 메서드 사용 가능
// str1.toFixed(); // 문자열 메서드가 아닌 것 사용 불가능

// boolean 타입
let bool1: boolean = true;
let bool2: boolean = false;

// null 타입
let null1: null = null;

// undefined 타입
let undefined1: undefined = undefined;

// 리터럴(값) 타입
// 타입으로 정의된 값 외에는 다른 값 사용 불가능
let numA: 10 = 10;
let strB: 'hello' = 'hello';
