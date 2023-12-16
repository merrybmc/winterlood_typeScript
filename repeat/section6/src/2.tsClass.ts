/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: '조병민',
  age: 30,
  position: 'frontend developer',
  work() {
    console.log('일합니다');
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일함');
  }
}

const employeeA = new Employee('조병민', 30, 'frontend Developer');
console.log(employeeA);

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, offceNumber: number) {
    super(name, age, position);
    this.officeNumber = this.officeNumber;
  }

  roomNumber() {
    console.log(`${this.officeNumber}번호 방입니다.`);
  }
}
