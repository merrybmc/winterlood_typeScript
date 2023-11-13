/**
 * 타입 단언
 * 아무 상황에서나 쓸 수 있는 문법은 아님
 * 규칙
 *  값 as 단언 (단언식)
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

type Person = {
  name: string;
  age: number;
};

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
  breed: '진돗개',
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중 단언
// 사용 권장하지 않음
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

// const로 선언한 것과 동일한 효과를 보여주는 단언
let num4 = 10 as const;

// const 단언을 할 경우 모든 property가 readonly
let cat = {
  name: '냐옹이',
  color: 'yellow',
} as const;

/**
 * Non Null 단언
 * 어떤 값이 null이나 undefined이 아니라고 알려줄 때
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '조병민',
};

const length: number = post.author!.length;
