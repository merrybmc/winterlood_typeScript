/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 */

// 기준 1. 반환값이 호환되는지
type A = () => number;
type B = () => 10;

let a: A = () => 10; // 반환값 number 타입
let b: B = () => 10; // 반환값 리터럴 타입 10

// 반환값 기준으로 캐스팅
a = b; // 가능, number <- 리터럴 업 캐스팅
// b = a; // 불가능, 리터럴 <- number 다운 캐스팅

// 기준 2. 매개변수가 호환되는지

// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 불가능, D타입을 C타입으로 취급, number <- 리터럴 업 캐스팅
d = c; // 가능, C타입을 D타입으로 취급, 리터럴 <- number 다운 캐스팅

// 매개변수가 객체타입을 가질 때
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color);
};

let testeFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1;
