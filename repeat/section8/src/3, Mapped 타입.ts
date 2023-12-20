/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | 'name' | 'age']: User[key];
};

type BooleanUser = {
  [key in 'id' | 'name' | 'age']: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: '조병민',
    age: 30,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updatedUser(user: User) {
  // ... 수정하는 기능
}

updatedUser({ id: 1, name: '조병민', age: 25 });
