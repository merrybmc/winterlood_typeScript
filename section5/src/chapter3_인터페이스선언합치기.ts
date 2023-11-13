/**
 * 인터페이스 선언 합치기
 * 보통 어떤 라이브러리에서 모듈 보강이 필요할 때 사용
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: 'hello',
  age: 30,
};
