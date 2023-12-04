/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: 'hello'; // 타입을 재정의 가능, 원본의 서브타입만 허용
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: 'hello',
  color: '',
  isBark: true,
  isScratch: true,
};
