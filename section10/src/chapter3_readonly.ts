/**
 * readonly<T>
 * -> 읽기 전용 타입 / 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용으로 변환
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string; // 선택적 프로퍼티
}

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글입니다.',
  tags: [],
  content: '초안',
};

// error
// readonlyPost.content = 'hello';

// readonly 타입 직접 만들기
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
