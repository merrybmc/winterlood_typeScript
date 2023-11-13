/**
 * 타입 좁히기
 * 조건문 등을 통해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | Person) {
  value; // number | string
  // 조건문 바깥에선 불가능
  value.toUpperCase();
  value.toFixed();

  // 타입 가드
  // 원시타입
  if (typeof value === 'number') {
    console.log(value.toFixed);
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
    // class
  } else if (value instanceof Date) {
    value.getTime();
    // obj
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
