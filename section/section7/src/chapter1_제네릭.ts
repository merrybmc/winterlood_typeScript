/**
 * 제네릭
 */

// any
// any 타입으로 추론되는게 좋은 상황이 아님
{
  function func(value: any) {
    return value; // any
  }

  let num = func(10); // any

  num.toUpperCase(); // any

  let str = func('string'); // any
  let bool = func(true); // any
}

// unknown
{
  function func(value: unknown) {
    return value; // unknown
  }

  let num = func(10); // unknown

  //
  num.toUpperCase(); // unknown
  num.toFixed(); // unknown
  // 메서드 사용 불가

  // unknown에서 메서드를 사용하려면
  // 타입 좁히기 사용
  // unknown타입은 매번 메서드를 쓸 때 타입 좁히기를 해야하는게 불편
  if (typeof num === 'string') {
    num.toUpperCase();
  }

  if (typeof num === 'number') {
    num.toFixed();
  }

  let str = func('string'); // unknown
  let bool = func(true); // unknown
}

// 제네릭 함수 (Generic = 일반/포괄적인/종합)
// 모든 타입에 두루두루 쓸 수 있는 범용적인 함수
// <T> 타입 변수
// 여러 타입의 값을 파라미터로 받아서 범용적으로 쓸 수 있도록 가능
{
  function func<T>(value: T): T {
    return value; // T
  }

  let num = func(10); // number 추론

  num.toFixed();

  let str = func('string'); // string 추론

  str.toUpperCase();

  let bool = func(true); // boolean 추론

  let arr = func([1, 2, 3]); // number[]

  // 타입 단언 추론
  let tuple = func([1, 2, 3] as [number, number, number]); // tuple

  // 타입 추론 방법2
  let tuple2 = func<[number, number, number]>([1, 2, 3]); // tuple
}
