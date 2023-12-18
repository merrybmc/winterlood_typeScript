/**
 * 제네릭 (일반적인 함수, 포괄적인)
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func('hello');
let arr = func([1, 2, 3]);
let tuple = func([1, 2, 3] as [number, number, number]); // 타입 단언
let tuple2 = func<[number, number, number]>([1, 2, 3]);
