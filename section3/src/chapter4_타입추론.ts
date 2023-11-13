/**
 * 타입 추론
 */

// number
let a = 10;

// string
let b = 'hello';

// obj
let c = {
  id: 1,
  name: '조병민',
  profile: {
    nickname: '새람이',
  },
  urls: 'www.naver.com',
};

let { id, name, profile, urls } = c;
let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return message;
}

// any
// 암묵적 any 타입
// 사용 권장하지 않음
// 초기 값을 이렇게 해줄 경우 타입이 매번 진화함
let d;
d = 10;

// number
d.toFixed();

// any
d = 'hello';

// string
d.toUpperCase();

// 리터럴 타입으로 추론
// 어차피 상수이기 때문에 다른 값을 담을 이유가 없기 때문
const num = 10;
const str = 'hello';

const arr = [1, 'string'];
