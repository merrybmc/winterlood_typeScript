// enum 타입
// 여러가지 값들에 각자 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트에는 존재하지 않는 타입

{
  enum Role {
    ADMIN, // 0
    USER, // 1
    GUEST, // 2
  }

  const user1 = {
    name: '조병민',
    role: Role.ADMIN,
  };

  const user2 = {
    name: '홍길동',
    role: Role.USER,
  };

  const user3 = {
    name: '김철수',
    role: Role.GUEST,
  };
}

// 숫자형 enum
{
  enum Role {
    ADMIN = 10, // 10
    USER, // 11
    GUEST, // 12
  }

  const user1 = {
    name: '조병민',
    role: Role.ADMIN,
  };

  const user2 = {
    name: '홍길동',
    role: Role.USER,
  };

  const user3 = {
    name: '김철수',
    role: Role.GUEST,
  };
}

// 문자형 enum
{
  enum Role {
    ADMIN,
    USER,
    GUEST,
  }

  enum Language {
    korea = 'ko',
    english = 'en',
  }

  const user1 = {
    name: '조병민',
    role: Role.ADMIN,
    language: Language.korea,
  };

  const user2 = {
    name: '홍길동',
    role: Role.USER,
    language: Language.english,
  };

  const user3 = {
    name: '김철수',
    role: Role.GUEST,
    language: Language.korea,
  };
}
