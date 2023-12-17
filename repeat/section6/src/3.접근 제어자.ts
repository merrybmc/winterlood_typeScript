/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

// public : 외부에서도 인스턴스 접근 허용
// private : 클래스 내부에서만 인스턴스 접근 가능
// 파생 클래스 내부에서 접근 불가능
// protected : 외부에서는 접근 불가능, 내부/ 파생 클래스에서는 접근 가능

class Employee {
  // 필드
  public name: string;
  private age: number;
  protected position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일하는중');
  }

  func() {
    this.name;
    this.age;
    this.position;
  }
}

const employee = new Employee('조병민', 30, 'frontend developer');
employee.name = '이정환';
// employee.age = 27; // error 접근 불가능
// employee.position = 'backend developer'; // error 접근 불가능
