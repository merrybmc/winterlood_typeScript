/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 합집합 타입 (Union 타입)
 */

// string과 number 타입을 쓸 수 있는 변수
let a: string | number;
a = 1;
a = 'hello';

// 배열
let arr: (number | string)[] = [1, 'hello'];

// 객체
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // name, color, language

let union1: Union1 = {
  name: '조병민',
  color: 'navy',
};

let union2: Union1 = {
  name: '조병민',
  language: 'ko',
};

let union3: Union1 = {
  name: '조병민',
  color: 'navy',
  language: 'ko',
};

/**
 * 교집합 타입 (Intersection) 인터섹션 타입
 */

type Intersection = Dog & Person;

// 프로퍼티가 하나라도 빠지면 안됨
let intersection: Intersection = {
  name: '조병민',
  color: 'navy',
  language: 'ko',
};
