/**
 * 접근 제어자
 * access modifier
 * 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정할 수 있는 문법
 * => public, private, protected
 */

class Employee {
  // 필드
  private name: string;
  protected age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일하는 중');
  }
}

const employee = new Employee('조병민', 30, '개발자');
console.log(employee);

// private 필드 접근 불가능
// employee.name = '김철수';

// protected 필드 접근 불가능
// employee.age = 27;
// employee.position = '디자이너';
console.log(employee);

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // 파생 클래스에서도 필드가 private일 때 접근 불가능
    // this.name;

    // protected 필드는 파생 클래스에서는 접근 가능
    this.age;
  }
}
