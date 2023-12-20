/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: '조병민',
  age: 30,
};

getPropertyKey(person, 'name');
