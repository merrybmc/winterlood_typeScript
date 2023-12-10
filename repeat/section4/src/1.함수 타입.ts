/**
 * 함수 타입 정의
 */

import { fchown } from 'fs';

function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = '조병민', age: number, tall?: number) {
  if (typeof tall === 'number') {
    console.log(`name : ${name}, age : ${age}, tall : ${tall + 10}`);
  }
}

introduce('조병민', 30, 176);

/**
 * rest parameter
 */

function getSum(...num: number[]) {
  return num.reduce((a, b) => a + b);
}

console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
