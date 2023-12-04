/**
 * 인덱스드 액세스 타입
 * 객체 타입으로부터 특정 프로퍼티의 타입을 뽑아서 변수에 정의
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location: string;
  };
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '안녕하세요',
    age: 30,
    location: 'kr',
  },
};

function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`);
}

printAuthorInfo(post.author);

function printAuthorId(id: Post['author']['id']) {
  console.log(id);
}

printAuthorId(post.author.id);

type PostList = {
  title: '게시글 제목';
  content: '게시글 내용';
  author: {
    id: 1;
    name: '안녕하세요';
    age: 30;
    location: 'kr';
  };
}[];

const postList: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '안녕하세요',
    age: 30,
    location: 'kr',
  },
};

console.log(postList);

function printListAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

printListAuthorInfo(postList.author);

// 튜플 타입 배열 타입 추출
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
