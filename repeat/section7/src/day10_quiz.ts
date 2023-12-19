/**
 * Quiz 1
 * 다음 요구사항을 만족하는 func 함수의 타입을 정의하세요
 *
 * func 함수는 매개변수를 그대로 반환하는 함수
 * 매개변수 value에는 모든 타입의 값이 들어올 수 있다
 * 반환값의 타입은 매개변수로 전달된 값의 타입과 같다
 * - ex) value의 값이 1일 경우 반환값은 number 타입
 * - ex) value의 값이 "hi"일 경우 반환값은 string 타입
 * - ex) value의 값이 [1,2]일 경우 반환값은 number[] 타입
 */

function func<T>(data: T): T {
  return data;
}

let num = func(1);
let str = func('hi');
let arr = func([1, 2]);

/**
 * Quiz 2
 * 다음 요구사항을 만족하는 getLastValue 함수의 타입을 정의하세요
 *
 * getLastValue 함수는 매개변수로 배열을 받아 배열의 마지막 값을 반환하는 함수
 * 매개변수 data에는 빈 배열을 제외한 모든 배열이 들어올 수 있습니다.
 * 반환값의 타입은 매개변수 data 배열의 마지막 요소의 타입이어야 합니다.
 * - ex) data 배열의 값이 [1, "hello"] 일 경우 반환값은 string 타입입니다.
 * - ex) data 배열의 값이 ["hello", 1] 일 경우 반환값은 number 타입입니다.
 */

function getLastValue<T>(data: [...unknown[], T]) {
  return data[data.length - 1];
}

let data1 = getLastValue([1, 'hello']);
let data2 = getLastValue(['hello', 1]);

/**
 * Quiz 3
 * 다음 요구사항을 만족하는 map 함수의 타입을 구현하세요
 *
 * map 함수는 자바스크립트 배열 메서드 map을 본따 만든 함수입니다.
 * 2개의 매개변수 arr과 callback을 받습니다.
 * arr 배열의 모든 요소에 callback 함수를 수행한 결과를 배열로 모아 반환합니다.
 */

function map<T>(item: T[], callback: (item: T) => T): T[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(item[i]));
  }
  return result;
}
