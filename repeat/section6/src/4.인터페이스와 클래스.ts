/**
 * 인터페이스와 클래스
 */

interface Characterinterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements Characterinterface {
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도만큼 이동`);
  }
}
