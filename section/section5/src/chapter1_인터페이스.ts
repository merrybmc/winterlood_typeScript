/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 * 객체 타입을 정의하는데 특화된 문법
 * (상속, 포함 등 특수한 기능들을 제공)
 */

interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void;
  sayHi(): void; // 오버라이딩 사용할려면 호출 시그니처 사용
  sayHi(a: number, b: number): void; // 오버라이딩 사용할려면 호출 시그니처 사용
}

const person: Person = {
  name: '조병민',
  //   age: 30,
  sayHi: () => {
    console.log('Hi');
  },
};
