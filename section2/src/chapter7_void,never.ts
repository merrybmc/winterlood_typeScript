// void (비어있는, 아무것도 없는)

// 함수에서 문자열을 반환
function func1(): string {
  return 'hello';
}

// 함수에서 아무런 값도 반환하지 않을 때
function func2(): void {
  console.log('hello');
}

let a: void;

// 불가능
a = 1;
a = 'hello';
a = {};

// 가능
a = undefined;
a = null;

// never
// 존재하지 않는, 불가능한 타입
// 반환이 불가능
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let a: never;

// 아무런 값도 할당 불가능
a = 1;
a = 'hello';
a = {};
a = undefined;
a = null;
