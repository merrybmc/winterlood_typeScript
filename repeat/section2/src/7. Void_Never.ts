// void type -> 아무것도 없음을 의미하는 타입
let a: void = undefined;

// 문자열 반환
function func1(): string {
  return 'hello';
}

// 아무것도 반환하지 않음
function func2(): void {
  console.log('hello');
}

// never
// 존재하지 않는, 불가능한 타입

// 무한루프 돌아서 반환이 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error('error');
}

let b: never;
// 어떤 값도 담을 수 없음
// b = 1; // error
// b = {}; // error
// b = ''; // error
// b = undefined; // error
// b = null; // error
