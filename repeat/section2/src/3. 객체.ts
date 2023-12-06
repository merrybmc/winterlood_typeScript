// object
let user1: object = {
  id: 1,
  name: '조병민',
};

// object 타입의 프로퍼티가 없다고 오류가 뜸
// 타입스크립트의 object라 는 타입은 객체라는 정보 외에는 아무런 정보도 없음
// console.log(user1.id); // error

// 객체 리터럴 타입 정의
// 구조적 타입 시스템
// - 프로퍼티를 기준으로 타입을 정의
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: '조병민',
};

console.log(user2.id);

// 연습
let dog: {
  name: string;
  color: string;
} = {
  name: '돌돌이',
  color: '갈색',
};

let user3: {
  // ? : 옵셔널 프로퍼티 (선택적 프로퍼티)
  id?: number; // id가 들어와도 되고 안들어와도 됨
  name: string;
} = {
  //   id: 1,
  name: '조병민',
};

let config: {
  // readonly : 프로퍼티의 값 변경 불가능 (읽기 전용)
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

// config.apiKey = 'hello'; // error
