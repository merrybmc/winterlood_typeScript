/**
 * 제네릭 응용
 */

// 첫번째 사례
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 2);
console.log(a, b);

const [c, d] = swap('1', 2);
console.log(c, d);

// 두번째 사례
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
console.log(num);

let str = returnFirstValue(['hello', 'world']);
console.log(str);

// 2-1
function returnFirstValue2<T, U>(data: [T, ...U[]]) {
  return data[0];
}

let numStr = returnFirstValue2([1, 'hello', 'world']);
console.log(numStr);

// 세번째 사례
// T는 number타입을 가지고 있는 length 프로퍼티로 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

// 위의 경우와 같음
interface InterfaceA {
  length: number;
}

function getLength2(data: InterfaceA) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // number
let var2 = getLength('12345'); // number
let var3 = getLength({ length: 10 }); // number

console.log(var1, var2, var3);

// let var4 = getLength(10); // error
// console.log(var4); // undefined

let var5 = getLength2([1, 2, 3]); // number
let var6 = getLength2('12345'); // number
let var7 = getLength2({ length: 10 }); // number
console.log(var5, var6, var7);

// let var8 = getLength2(10); // error
// console.log(var8); // undefined
