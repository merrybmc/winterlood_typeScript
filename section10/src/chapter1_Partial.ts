/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string; // 선택적 프로퍼티
}

// 모든 프로퍼티를 선택적 프로퍼티로 변환해주는 유틸리티 타입
const draft: Partial<Post> = {
  title: '제목 짓는중',
  content: '내용도 초안',
};

// Partial 타입 직접 만들기
type Partial2<T> = {
  [key in keyof T]?: T[key];
};

const draft2: Partial2<Post> = {
  title: '제목 짓는중',
  content: '내용도 초안',
};
