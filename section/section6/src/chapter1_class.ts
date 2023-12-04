/**
 * 클래스
 */

let studentA = {
  name: '조병민',
  grade: 'A+',
  age: 30,
  study() {
    console.log('열심히 공부하자');
  },
  introduce() {
    console.log('안녕하세요!');
  },
};

class Student {
  // 필드 = 클래스가 만들어낼 객체 프로퍼티
  name: string;
  grade: string;
  age: number;

  // 생성자 = 실제 객체(메서드)를 생성하는 역할
  constructor(name: string, grade: string, age: number) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부하자');
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill: string;

  // 생성자
  constructor(name: string, grade: string, age: number, favoriteSkill: string) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

// 인스턴스 생성 = 클래스를 이용해서 만든 객체
let studentB = new Student('김철수', 'B+', 27);
console.log(studentB.name);
studentB.introduce();

const studentDeveloper = new StudentDeveloper('홍길동', 'C+', 24, 'typeScript');
studentDeveloper.programming();
