// enum type
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  //   ADMIN = 0,
  //   USER = 1,
  //   GUEST = 2,
  ADMIN, // 숫자를 할당하지 않아도 자동으로 할당
  USER,
  GUEST,

  // 숫자형 ENUM
  //   ADMIN = 10, // 10번부터 시작
  //   USER,
  //   GUEST,
}

// 문자열 할당
enum Language {
  Korean = 'ko',
  english = 'em',
}

const user1 = {
  name: '조병민',
  role: Role.ADMIN, // 관리자
  Language: Language.Korean,
};
const user2 = {
  name: '홍길동',
  role: Role.USER, // 일반 유저
  Language: Language.english,
};
const user3 = {
  name: '김철수',
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
