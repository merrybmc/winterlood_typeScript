/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * + 객체의 구조를 정의하는데 특화된 문법
 * (상속, 합침 등의 특수한 기능을 제공)
 */

interface Person {
  name: string;
  age?: number;
  sayHi: () => void;
}

const person: Person = {
  name: '조병민',
  sayHi: () => {
    console.log('Hi');
  },
};

person.name = '조병민';
