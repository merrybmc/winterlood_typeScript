/**
 * 인덱스드 액세스 타입
 */

// 객체는 interface로
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
  content: '게시글 본문',
  author: {
    id: 1,
    name: '조병민',
    age: 30,
    location: '서울',
  },
};

function printAuthorInfo(author: Post['author']) {
  console.log(`${author.id}-${author.name}`);
}

printAuthorInfo(post.author);

// 배열은 타입으로
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location: string;
  };
}[];

const post2: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '조병민',
    age: 30,
    location: '서울',
  },
};

function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.id}-${author.name}`);
}

type Tup = [number, string, boolean];

// 튜플 인덱스드 액세스 타입
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
