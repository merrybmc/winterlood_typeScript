/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

// 유니온 타입으로 해결
function getPropertyKey(person: Person, key: 'name' | 'age') {
  console.log(person[key]);
}

const person: Person = {
  name: '조병민',
  age: 30,
};

getPropertyKey(person, 'name');

// keyof 연산자로 해결
function getPropertyKey2(person: Person, key: keyof Person) {
  console.log(person[key]);
}

getPropertyKey2(person, 'name');
