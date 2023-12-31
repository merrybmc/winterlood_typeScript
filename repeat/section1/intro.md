타입스크립트 = 자바스크립트의 확장판

자바스크립트를 더 안전하게 사용할 수 있도록 "타입 관련 기능들을 추가한" 언어

타입스크립트는 자바스크립트의 한계를 극복하기 위해 등장 + 안정성

타입 시스템

- 모든 프로그래밍 언어에는 타입 시스템을 가지고 있다.

  - 값들을 어떤 기준으로 묶어 타입을 규정할 것인가?

    - Number 타입
      0.132
      1
      -90

    - Boolean 타입
      true
      false

    - String 타입
      "한입 타스"
      "Hello"
      "안녕하세요?"

- 언어의 타입 관련된 문법 체계를 모아둔 규칙
  - 값들을 어떤 기준으로 묶어 타입을 규정할 것인가?
  - 코드의 타입을 언제 검사할 것인가?
  - 어떻게 타입을 검사할 것인가?

타입 시스템의 2가지 종류

- 정적 타입 시스템

  - 코드 실행 이전에 모든 변수의 타입을 고정적으로 결정함
  - 엄격하고 고정적인 시스템
  - C언어, Java

- 동적 타입 시스템
  - 코드를 실행하고 나서 그때 그때 마다 유동적으로 변수의 타입을 결정함
  - 자유롭고 유연한 시스템
  - javaScript, python

자바스크립트가 사용하는 동적 타입 시스템은 변수의 타입들을 코드가 실행되는 도중에 결정한다.

타입스크립트의 독특한 타입 시스템

- 점진적 타입 시스템(Gradual Type System) (정적 + 동적 타입 시스템)
  - 동적인 타입 시스템의 안전하지 않은 문제를 해결하면서도
  - 정적인 타입 시스템의 귀찮음도 동시에 해결함
  - 모든 변수에 타입을 일일이 지정할 필요가 없음

타입스크립트 setting

- 1. npm init node.js 패키지 초기화
- 2. npm install @types/node typesnode 패키지 설치
- 3. npm install typescript -g 타입 스크립트 global로 설치
     (global = 폴더 안에서만 사용하는게 아닌 아닌 컴퓨터 전체에서 사용할 수 있는 환경을 만들어주도록 설치)
- 4. tsc -v 타입스크립트가 잘 설치되었는지 확인
- 5. tsc --init tsconfig.json 설치
