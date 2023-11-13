/**
 * 사요자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
  if ('isBark' in animal) {
    console.log(animal.name); // Dog
  } else if ('isScratch' in animal) {
    console.log(animal.name); // Cat
  }
}

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning2(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.name); // Dog
  } else if (isCat(animal)) {
    console.log(animal.name); // Cat
  }
}
