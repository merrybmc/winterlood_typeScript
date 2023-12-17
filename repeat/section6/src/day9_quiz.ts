/**
 * Quiz 1.
 * 다음 요구사항을 만족하는 Pokemon 클래스를 완성하세요.
 *
 * 다음 3개의 필드를 갖습니다.
 * name 필드는 String 타입이며 Public 접근 제어자 입니다.
 * skill 필드는 String 타입이며 Public 접근 제어자 입니다.
 * type 필드는 String 타입이며 ReadOnly(읽기 전용) 필드입니다.
 *
 * 다음 2개의 메서드를 갖습니다.
 * getName 메서드는 name 필드의 값을 반환합니다.
 * setSkill 메서드는 String 타입의 매개변수를 받아서 skill 필드의 값을 업데이트 합니다.
 *
 */

class Pokemon {
  constructor(public name: string, public skill: string, readonly type: string) {}

  getName(): string {
    return this.name;
  }

  setSkill(update: string) {
    this.skill = update;
  }
}

const pokemon = new Pokemon('꼬부기', '물대포', '물');
console.log(pokemon.getName());
pokemon.setSkill('하이드로펌프');
