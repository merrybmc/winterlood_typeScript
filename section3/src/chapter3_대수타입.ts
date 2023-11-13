/**
 * 대수 타입
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 타입 ( Union 타입 )
 */

// 원시 타입
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

// 배열
let arr: (number | string | boolean)[] = [1, 'hello', true];

// 객체
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type UnionObj = Dog | Person;

let obj: UnionObj = {
  name: 'hello',
  color: 'black',
  language: 'ko',
};

/**
 * 2. 교집합 타입 ( Intersection 타입 )
 */

let variable: number & string; // never 타입 (불가능한 타입 / 공집합)

type InterSection = Dog & Person;

let interSection: InterSection = {
  name: '',
  color: '',
  // 모든 key값이 다 포함되어야 에러가 안남
  //   language: '',
};
