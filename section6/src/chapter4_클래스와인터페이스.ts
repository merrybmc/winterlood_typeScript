/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// implements(구현) = 클래스의 설계도 역할
// interface 필드는 무조건 public 접근 제어자
class Character implements CharacterInterface {
  name: string;
  moveSpeed: number;
  private attack: number;

  constructor(name: string, moveSpeed: number, attack: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
    this.attack = attack;
  }

  move() {
    console.log('moving');
  }
}

const Terran = new Character('SCV', 5, 5);
console.log(Terran);
