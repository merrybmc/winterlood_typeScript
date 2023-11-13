/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

// 업 캐스팅 가능
num1 = num2;

// 다운 캐스팅 불가능
num2 = num1;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지?
 */

// 슈퍼 타입
type Animal = {
  name: string;
  color: string;
};

// 서브 타입
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

// 업 캐스팅
animal = dog;

// 다운 캐스팅
dog = animal;

// 슈퍼 타입
type Book = {
  name: string;
  price: number;
};

// 서브 타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '리액트책',
  price: 33000,
  skill: 'reactjs',
};

// 업 캐스팅
book = programmingBook;

// 다운 캐스팅
programmingBook = book;

// 초과 프로퍼티 검사 발동
let book2: Book = {
  name: '리액트책',
  price: 33000,
  skill: 'reactjs',
};

let book3: Book = programmingBook;
