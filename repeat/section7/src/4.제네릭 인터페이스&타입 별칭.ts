/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPari2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['hi', 'hello'],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let NumberMap: NumberMap = {
  key: -1231,
  key2: 1234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key1: 'hi',
  key2: 'hello',
  hey3: 'world',
};

let booleanMap: Map<boolean> = {
  key1: true,
  key2: false,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
  key2: 'world',
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

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
    console.log('잘못 오셨습니다.');
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User = {
  name: '조병민',
  profile: {
    type: 'developer',
    skill: 'typescript',
  },
};

const studentUser: User = {
  name: '이정환',
  profile: {
    type: 'student',
    school: '서울대학교',
  },
};

interface User2<T> {
  name: string;
  profile: T;
}

function goToSchool2(user: User2<Student>) {
  if (user.profile.type !== 'student') {
    console.log('잘못 오셨습니다.');
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser2: User2<Developer> = {
  name: '조병민',
  profile: {
    type: 'developer',
    skill: 'typescript',
  },
};

const studentUser2: User2<Student> = {
  name: '이정환',
  profile: {
    type: 'student',
    school: '서울대학교',
  },
};
