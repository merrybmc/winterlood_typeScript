/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog';

type ColoredAnimal2 = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = 'red-dog';
const coloredAnimal2: ColoredAnimal2 = 'red-dog';
