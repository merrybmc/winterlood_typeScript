/**
 * 제네릭 인터페이스
 */

// 제네릭 인터페이스 기본적인 사용 방법
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 5,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['hello', 'world'],
};

// 제네릭 인터페이스와 인덱스 시그니처 활용

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1234,
  key2: 4567,
  key3: 6789,
};

// 제네릭 인터페이스를 활용하여 더 유연하게 타입 정의
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: 'value',
  key2: 'hello',
  key3: 'world',
};

let booleanMap: Map<boolean> = {
  key: true,
  key2: false,
  key3: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hi',
  key2: 'hello',
  key3: 'world',
};

// 실제 활용 예시
// 유저 관리 프로그램
// 유저 구분
// -> 학생 / 개발자 유저

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User) {
  if (user.profile.type !== 'student') {
    console.log('함수를 잘못 호출하셨습니다.');
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
  name: '조병민',
  profile: {
    type: 'developer',
    skill: 'frontend',
  },
};

const studentUser: User = {
  name: '김철수',
  profile: {
    type: 'student',
    school: '서울대학교',
  },
};

goToSchool(studentUser);

interface User2<T> {
  name: string;
  profile: T;
}

function goToSchool2(user: User2<Student>) {
  if (user.profile.type !== 'student') {
    console.log('함수를 잘못 호출하셨습니다.');
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser2: User2<Developer> = {
  name: '비실이',
  profile: {
    type: 'developer',
    skill: 'backend',
  },
};

const studentUser2: User2<Student> = {
  name: '케로로',
  profile: {
    type: 'student',
    school: '카이스트',
  },
};

goToSchool2(studentUser2);
