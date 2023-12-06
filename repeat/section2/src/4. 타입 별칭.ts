{
  // 객체 리터럴 타입을 여러번 정의해야하는 문제 발생
  let user1: {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  } = {
    id: 1,
    name: '조병민',
    nickname: 'saerami',
    birth: '1993.09.19',
    bio: '안녕하세요',
    location: 'daegu',
  };

  let user2: {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  } = {
    id: 2,
    name: '김철수',
    nickname: 'saerami',
    birth: '1993.09.19',
    bio: '안녕히가세요',
    location: 'seoul',
  };
}

{
  // 타입 별칭
  type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  };

  let user: User = {
    id: 1,
    name: '조병민',
    nickname: 'saerami',
    birth: '1993.09.19',
    bio: '안녕하세요',
    location: 'daegu',
  };
}

// 인덱스 시그니처
type CountryCodes = {
  //   korea: string;
  //   UnitedState: string;
  //   UnitedKindom: string;
  //   ...
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  // 추가 프로퍼티의 타입은 반드시 인덱스 시그니처와의 타입과 같거나 호환되어야 함
  //   Korea: number | string; // error
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
