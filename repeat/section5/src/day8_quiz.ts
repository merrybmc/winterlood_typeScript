// Quiz 1
// 다음 요구사항을 만족하는 구현 시그니처를 완성하세요 (매개변수 타입만 정의)

import { futimes } from 'fs';

// 이미 작성되어있는 3개의 오버로드 시그니처를 모두 만족해야 합니다.
// a, b, c의 값을 모두 더한 값을 반환합니다.
// 만약 매개변수의 값이 undefined일 경우 모두 0으로 취급합니다.
// a가 없을 경우 : 0
// b가 없을 경우 : 0
// c가 없을 경우 : 0

function add(): number;
function add(a: number): number;
function add(a: number, b: number, c: number): number;

function add(a?: number, b?: number, c?: number) {
  return a || 0 + b || 0 + c || 0;
}

add();
console.log(add(1));
console.log(add(1, 2, 3));

// Quiz 2
// 다음 요구사항을 만족하도록 사용자 정의 타입 가드를 완성하세요
// isGuest 함수가 true를 반환하면 매개변수로 전달된 user는 Guest 타입임이 보장됨
// isMember 함수가 true를 반환하면 매개변수로 전달된 user는 Member 타입임이 보장됨

type Guest = {
  visitCount: number;
};

type Member = {
  id: string;
};

type User = Guest | Member;

function isGuest(user: User): user is Guest {
  if ('visitCount' in user) {
    return user.visitCount !== undefined;
  }
}
function isMember(user: User): user is Member {
  return (user as Member).id !== undefined;
}

// Quiz 3
// 다음 조건을 만족하는 3가지 인터페이스를 추가로 구현하세요
// 모든 인터페이스는 Person 인터페이스를 확장합니다(extends)
// i. Student 인터페이스는 grade 프로퍼티를 갖습니다.
// grade 프로퍼티에는 "A", "B", "C"만 저장할 수 있습니다.
// ii. Developer 인터페이스는 skill 프로퍼티를 갖습니다.
// skill 프로퍼티에는 문자열 배열을 저장할 수 있습니다.
// iii. Boss 인터페이스는 company 프로퍼티를 갖습니다.
// company 프로퍼티에는 문자열을 저장할 수 있습니다.

interface Person {
  name: string;
}

interface Student extends Person {
  grade: 'A' | 'B' | 'C';
}
interface Developer extends Person {
  skill: string;
}
interface Boss extends Person {
  company: string;
}
