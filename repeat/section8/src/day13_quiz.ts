/**
 * Quiz 1.
 *
 * 다음 요구사항을 만족하도록 getSellersFromProducts 함수의 매개변수와 반환값 타입을 정의하세요
 * 반환값을 명시적으로 설정해야 합니다. (인덱스드 액세스 타입)
 */

interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

function getSellersFromProducts(products: Product[]): Product['seller'][] {
  return products.map((product) => product.seller);
}

/**
 * Quiz 2.
 * 다음 조건을 만족하는 3개의 타입을 추가로 정의하세요
 *
 * PartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.
 * ReadonlyProduct 타입은 Product 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.
 * ReadonlyPartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.
 */

interface Product2 {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type PartialProduct = {
  [key in 'id' | 'name' | 'seller']?: Product2[key];
};

type ReadonlyProduct = {
  readonly [key in keyof Product2]: Product2[key];
};

type ReadonlyPartialProduct = {
  readonly [key in keyof Product2]?: Product2[];
};

/**
 * Quiz 3.
 *
 * 다음 조건을 만족하는 Score 타입을 구현하세요
 *
 * Score 타입은 점수를 나타내기 위한 문자열 타입으로 `${0부터 10까지의 정수}-${0부터 10까지의 정수}` 형식을 갖습니다.
 * - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
 * - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.
 */
