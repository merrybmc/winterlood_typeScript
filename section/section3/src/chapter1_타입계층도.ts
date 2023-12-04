/**
 * Unknown 타입
 * 모든 값의 집합, 슈퍼 타입, 업캐스팅 가능
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운 캐스팅 불가능
  let unknownVar: unknown;
  let num: number = unknownVar;
  let str: string = unknownVar;
  let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * 공집합
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅, 가능
  let num: number = neverFunc;
  let str: string = neverFunc;
  let bool: boolean = neverFunc;

  // 다운 캐스팅, 불가능
  let never1: never = 10;
  let never2: never = 'string';
  let never3: never = true;

  /**
   * Void 타입
   * 반환값이 없음
   */

  function voidExam() {
    function voidFunc(): void {
      console.log('hi');
    }
    let voidVar: void = undefined;
  }
}

/**
 * any 타입
 * cheat type
 * 모든 타입의 슈퍼 타입이며
 * never를 제외한 모든 타입의 서브 타입이기도 하다.
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 다운 캐스팅 불가능
  neverVar = anyVar;
}
