// 객체 리터럴 타입
// 구조를 기준으로 타입을 정의(구조적 타입 시스템)
// === Property Based Type System
let user: {
  // ? = id값이 있어도 되고 없어도 됨, 없어도 오류가 안남
  // Optional Property 라고 부름 (선택적 프로퍼티)
  id?: number;
  name: string;
} = {
  id: 1,
  name: '조병민',
};

let dog: {
  name: string;
  color: string;
} = { name: '돌돌이', color: 'brown' };

user = {
  name: '홍길동',
};

let config: {
  // readonly = 값 변경 금지, 읽기 전용
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};
