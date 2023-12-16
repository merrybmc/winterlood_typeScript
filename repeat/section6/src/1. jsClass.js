let studentA = {
  name: '조병민',
  grade: 'A+',
  age: 30,
  study() {
    console.log('열심히 공부하자');
  },
  introduce() {
    console.log('안녕하세요');
  },
};

let studentB = {
  name: '홍길동',
  grade: 'B-',
  age: 30,
  study() {
    console.log('열심히 공부함');
  },
  introduce() {
    console.log('안녕하세요');
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log('열심히 공부함');
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }
}

let studentC = new Student('조병민', 'A+', 30);

console.log(studentB);
console.log(studentC);

studentC.study();
studentC.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}으로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper('조병민', 'A+', 30, 'TS');
console.log(studentDeveloper);
studentDeveloper.programming();
