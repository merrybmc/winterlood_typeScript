/**
 * 맵드(Mapped) 타입
 * keyof 연산자처럼 객체 타입을 조작하는 기능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: '조병민',
    age: 30,
  };
}

// 맵드 타입이 필요한 상황
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age: number;
// }

// 한 명의 유저 정보를 수정하는 기능
// function updateUser(user: PartialUser) {
//   // ... 수정하는 기능
//   return {
//     user,
//   };
// }

// 맵드 타입
type PartialUser = {
  [key in 'id' | 'name' | 'age']: User[key];
};

// 맵드 + keyof
type PartialUser2 = {
  [key in keyof User]: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function readonlyFetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: '조병민',
    age: 30,
  };
}

const readonlyUserData = readonlyFetchUser();

console.log(readonlyUserData);
// 불가능
// readonlyUserData.id = 2; // readonly

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
  return {
    user,
  };
}

updateUser({
  ...fetchUser(),
  age: 25,
});

console.log(
  updateUser({
    ...fetchUser(),
    age: 25,
  })
);
