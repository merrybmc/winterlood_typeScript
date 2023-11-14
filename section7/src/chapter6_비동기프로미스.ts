/**
 * 프로미스 객체
 */

// resolve 성공
// reject 실패
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

// 에러 발생
// response = unknown
// promise.then((response) => console.log(response * 10));

// 해결 케이스 1 : 타입 좁히기
// 단점 : 번거로움
promise.then((response) => {
  if (typeof response === 'number') {
    console.log(response * 20);
  }
});

// 해결 케이스 2 : 제네릭 활용
const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

promise2.then((response) => console.log(response * 20));

// reject
const promise3 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject('에러 발생');
  }, 2000);
});

promise3.catch((error) => console.log(error));

// 프로미스를 반환하는 함수의 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 컨텐츠',
      });
    }, 2000);
  });
}

const postRequest = fetchPost();
postRequest.then((response) => console.log(response));
