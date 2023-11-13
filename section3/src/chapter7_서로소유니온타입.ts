/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin => (name)님 현재까지 (kickCount)명 강퇴하였습니다.
// Member => (name)님 현재까지 (point)를 모았습니다.
// Guest => (name)님 현재까지 (visitCount)번 오셨습니다.
function login(user: User) {
  //   user; // User

  //   case 1
  //   if ('kickCount' in user) {
  //     // user; // Admin
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
  //   } else if ('point' in user) {
  //     // user; // Member
  //     console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
  //   } else if ('visitCount' in user) {
  //     // user; // Guest
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  //   }

  //   case 2
  //   if (user.tag === 'ADMIN') {
  //     // user; // Admin
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
  //   } else if (user.tag === 'MEMBER') {
  //     // user; // Member
  //     console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
  //   } else if (user.tag === 'GUEST') {
  //     // user; // Guest
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  //   }

  //   case 3
  switch (user.tag) {
    case 'ADMIN':
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
      break;
    case 'MEMBER':
      console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
      break;
    case 'GUEST':
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    default:
      return;
  }
}

/**
 * 복습겸 한가지 사례 추가
 */

// 비동기 작업의 결과를 처리하는 객체 만들기

type LoadingTask = {
  state: 'LOADING';
};
type FaildTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FaildTask | SuccessTask;

// type AsyncTask = {
//   state: 'LOADING' | 'FAILED' | 'SUCCESS'; // 리터럴 타입 정의
//   error?: {
//     // 선택적 프로퍼티
//     message: string;
//   };
//   response?: {
//     // 선택적 프로퍼티
//     data: string;
//   };
// };

const loading: AsyncTask = {
  state: 'LOADING',
};

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은...',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터는 ...',
  },
};

// LOADING => 로딩중 출력
// FAILED => 에러메세지 출력
// SUCCESS => 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩중');
      break;
    case 'FAILED':
      console.log(task.error?.message);
      break;
    case 'SUCCESS':
      console.log(task.response?.data);
      break;
    default:
      return;
  }
}
