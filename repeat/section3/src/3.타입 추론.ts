/**
 * 타입 추론
 */

let a = 10; // 자동으로 number 타입으로 추론
let b = 'hello'; // string 추론
let c = {
  // 객체 추론
  id: 1,
  name: '조병민',
  profile: {
    nickname: 'saerami',
  },
  urls: ['https://winterlood.com'],
};

let { id, name, profile } = c; // 구조분해할당 추론
let [one, two, three] = [1, 'hello', true];

// 파라미터 기본값
function func(message = 'hello') {
  return 'hello';
}

let d;
d = 10;
d.toFixed();
// d.toUpperCase(); // d가 number로 추론되어서 사용 불가능

d = 'hello'; // 다른 타입의 값은 할당 가능, 타입 재추론됨
d.toUpperCase(); // 문자열 메서드도 사용 가능
