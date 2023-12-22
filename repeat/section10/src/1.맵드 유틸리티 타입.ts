/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안...',
};

type makePartial<T> = {
  [key in keyof T]?: T[key];
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const withThumbnailPost: Required<Post> = {
  title: '한 입 타스 후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: '',
};
