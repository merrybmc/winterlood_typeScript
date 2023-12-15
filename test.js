{
  function weirdFunction() {
    return 1;
    return 2;
    return 3;
    return 4;
    return 5;
  }

  console.log(weirdFunction());
}

function* generatorFunction() {
  console.log('안녕하세요');
  yield 1;
  console.log('제너레이터 함수');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}

const generator = generatorFunction();
// generator.next();
// generator.next();
// generator.next();
// generator.next();

function* sumGenerator() {
  console.log('sumGenerator이 시작되었습니다.');
  let a = yield;
  console.log('a값을 받았습니다.');
  let b = yield;
  yield a + b;
}

const sum = sumGenerator();
sum.next();
sum.next();
sum.next();

function* watchGenerator() {
  console.log('모니터링 시작');
  while (true) {
    const action = yield;
    if (action.type === 'HELLO') {
      console.log('안녕하세요');
    }
    if (action.type === 'BYE') {
      console.log('안녕히가세요');
    }
  }
}

const watch = watchGenerator();
watch.next();
watch.next({ type: 'BYE' });
watch.next({ type: 'HELLO' });
