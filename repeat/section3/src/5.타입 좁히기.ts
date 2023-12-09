/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func(value: number | string | Date | Person) {
  value; // string | number
  //   value.toUpperCase(); // string | number
  //   value.toFixed(); // string | number

  // 타입을 좁힐 수 있도록 도와주는 타입 가드
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    value.getTime();
  } else if ('name' in value) {
    console.log(value.name);
  }
}
