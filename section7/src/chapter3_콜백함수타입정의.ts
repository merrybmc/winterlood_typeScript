/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((data) => data * 2);
console.log(newArr);
// [2, 4, 6]

// function map(arr: unknown, callback: (item: unknown) => unknown) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

function map<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let mapArr1 = map(arr, (data) => data * 2);
let mapArr2 = map(['hi', 'hello', 'world'], (data) => data.toUpperCase());
// let mapArr3 = map(['hi', 'hello', 'world'], (data) => parseInt(data));

console.log(mapArr1, mapArr2);

function map2<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let mapArr3 = map2(['hi', 'hello', 'world'], (data) => parseInt(data));
console.log(mapArr3);
