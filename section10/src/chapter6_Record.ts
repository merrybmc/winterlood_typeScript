/**
 * Record<K, V>
 * 객체 타입의 중복되는 프로퍼티가 있는 타입을 만들어주는 타입
 */

type ThumbnailLegacy = {
  large: {
    url: string;
    size: number;
  };
  medium: {
    url: string;
    size: number;
  };
  small: {
    url: string;
    size: number;
  };
  watch: {
    url: string;
    size: number;
  };
};

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;

// Record 타입 직접 구현해보기
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
