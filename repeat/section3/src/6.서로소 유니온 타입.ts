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

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}포인트 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}명 방문했습니다.
function login(user: User) {
  //   if ('kickCount' in user) {
  //     // admin 타입
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  //   } else if ('point' in user) {
  //     // Member 타입
  //     console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
  //   } else if ('visitCount' in user) {
  //     // Guest 타입
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}명 방문했습니다.`);
  //   }
  //   if (user.tag === 'ADMIN') {
  //     // admin 타입
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  //   } else if (user.tag === 'MEMBER') {
  //     // Member 타입
  //     console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
  //   } else if (user.tag === 'GUEST') {
  //     // Guest 타입
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}명 방문했습니다.`);
  //   }

  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(`${user.name}님 현재까지 ${user.visitCount}명 방문했습니다.`);
      break;
    }
  }
}

const loading = {
  state: 'LOADING',
};

const failed = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은 ~~ 입니다.',
  },
};

const success = {
  state: 'SUCCESS',
  response: {
    data: '데이터는 ~~~ 입니다.',
  },
};

type AsyncTask = {
  state: 'LOADING' | 'FAILED' | 'SUCCESS';
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 에러메세지 출력
// 성공 -> 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩중');
      break;
    }
    case 'FAILED': {
      console.log(task.error.message);
      break;
    }
    case 'SUCCESS': {
      console.log(task.response.data);
    }
  }
}
