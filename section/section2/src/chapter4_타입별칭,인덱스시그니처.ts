// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  intro: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '조병민',
  nickname: '새람이',
  birth: '1993.09.19',
  intro: '안녕하세요',
  location: '대구광역시',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  // Korea 프로퍼티는 반드시 존재해야 할 때
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 'ko',
  UnitedState: 840,
  UnitedKingdom: 826,
};
