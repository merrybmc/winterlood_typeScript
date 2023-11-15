/**
 * Omit<T, K>
 * -> 생략하다, 제외하다
 * -> 객체 타입으로부터 특정 프로퍼티를 제외하는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const noTitlePost: Omit<Post, 'title'> = {
  content: '내용 초안',
  tags: [],
  thumbnailURL: 'https://...',
};

// Omit 타입 직접 구현하기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// => T에는 Post 타입
// => K에는 "title"
// => Pick<Post, Exclude<keyof Post, "title">>
// => Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>
// => Pick<Post, "content" | "tags" | "thumbnmailURL" >
