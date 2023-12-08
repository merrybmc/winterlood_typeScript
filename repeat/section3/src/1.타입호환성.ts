/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 가능 업 캐스팅
// num2 = num1; // 불가능 다운 캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진돗개',
};

// 프로퍼티를 기준으로 추론
animal = dog; // 업 캐스팅

// dog = animal; // 불가능 다운 캐스팅
