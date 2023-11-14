/**
 * 제네릭 클래스
 */

// 기본 클래스
class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([]);

numberList.push(10);
numberList.push(20);
numberList.push(30);
numberList.pop();

numberList.print();

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const list = new List([]);

list.push(1);
list.push('hello');
list.push(true);

list.print();
