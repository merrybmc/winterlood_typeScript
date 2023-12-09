// quiz 1
// 아래 코드의 변수 a,b,c,d,e의 타입은 각각 어떻게 추론될까요?
let a = 10; // number
const b = 20; // number
const c = [1, 2]; // number[]
const d = [1, 'hello', true]; // (number | string | boolean)[]
const e = [1, 2, 3] as const; // readonly [1,2,3]

// quiz 2
// 다음 요구사항을 만족하는 Animal, DogCat 타입을 완성하세요
// Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
// DogCat 타입은 Dog이자 Cat입니다.

type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

type Animal = Dog | Cat;
type DogCat = Dog & Cat;
