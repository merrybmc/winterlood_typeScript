/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글 제목',
  content: '옛날 글 내용',
};

// Pick 타입 직접 만들기
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};
