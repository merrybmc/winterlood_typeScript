/**
 * 타입 단언 (type assertion)
 */

type Person = {
  name: string;
  age: number;
};

// 초기화 값 단언
let person: Person = {} as Person;
person.name = '조병민';
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진돗개', // 초과 프로퍼티 허용 X
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거나
 * b가 A의 서브 타입이어야함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

// 객체에 const 단언을 하면 모든 프로퍼티가 readonly가 됨
let cat = {
  name: '고양이',
  color: 'yellow',
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글',
  author: '조병민',
};

const len: number = post.author?.length;
console.log(len);
