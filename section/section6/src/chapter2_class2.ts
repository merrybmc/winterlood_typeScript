const employee = {
  name: '조병민',
  age: 27,
  position: 'developer',
  work() {
    console.log('일하는중');
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

  work() {
    console.log('일하는중');
  }
}

const employeeB = new Employee('조병민', 30, '개발자');
console.log(employeeB);

const employeeC: Employee = {
  name: '조병민',
  age: 30,
  position: '개발자',
  work() {},
};

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const executiveOfficer = new ExecutiveOfficer('조병민', 30, '개발자', 3);
