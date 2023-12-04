/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string; // 선택적 프로퍼티
}

const withThumbnailPost: Required<Post> = {
  title: '한입 타스',
  tags: ['ts'],
  content: '',
  // thumbnailURL도 필수 프로퍼티가 되어서 에러 발생
  //   thumbnailURL: 'https://...',
};

// 직접 구현하기
type Required2<T> = {
  // -? = 필수 프로퍼티
  [key in keyof T]-?: T[key];
};

const withThumbnailPost2: Required2<Post> = {
  title: '한입 타스',
  tags: ['ts'],
  content: '',
  // thumbnailURL도 필수 프로퍼티가 되어서 에러 발생
  //   thumbnailURL: 'https://...',
};
