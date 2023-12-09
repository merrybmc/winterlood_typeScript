// Quiz 1
// 타입 단언을 이용해 person 변수에 빈 객체를 할당하세요.

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;

// Quiz 2
// 타입 단언을 이용해 함수 호출에서의 오류를 해결하세요
let value = 10 as const; // 10 리터럴 타입 추론
giveMe10(value);

function giveMe10(value: 10) {
  return value;
}

// Quiz 3
// 다음 요구사항을 만족하는 코드를 작성하세요
type Boss = {
  type: 'BOSS';
  car: string;
};

type Employee = {
  type: 'EMPLOYEE';
  salary: number;
};

type CompanyMember = Employee | Boss;

function Check(member: CompanyMember) {
  switch (member.type) {
    case 'BOSS': {
      console.log('member는 BOSS입니다.');
    }
    case 'EMPLOYEE': {
      console.log('member는 EMPLOYEE입니다.');
    }
  }
}
