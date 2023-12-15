/**
 * 선언 합침
 */

// {
//   // type 동일한 이름으로 선언할 시 오류 발생
//   type Person = {
//     name: string;
//   };

//   type Person = {
//     age: number;
//   };
// }

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: '',
  age: 27,
};

interface Lib {
  a: number;
  b: number;
}

// 모듈 보강
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
