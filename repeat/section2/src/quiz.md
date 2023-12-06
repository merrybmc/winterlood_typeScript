JS의 단점과 TS의 장점
Quiz 1
정적 타입 시스템과 동적 타입 시스템의 단점들은 보완하고
장점들은 그대로 가져온 TypeScript의 타입 시스템을 뭐라고 부를까요?

- 점진적 타입 시스템(Gradual Type System)

Quiz 2
TypeScript의 타입 시스템이 갖는 특징에는 어떤 점이 있을까요?
바로 딱 떠오르는 한가지 특징을 적어주세요.

- 동적인 타입 시스템의 안전하지 않은 문제를 해결하면서도 정적인 타입 시스템의 모든 변수에 일일이 타입을 지정하지 않아도 되는 귀찮음도 동시에 해결함

Quiz 3
typeScript를 컴파일하면 그 결과로 무엇이 생성되나요?

- ts파일을 컴파일한 js파일

Quiz 4
타입스크립트는 프로그래머가 직접 컴파일러 옵션을 설정할 수 있는 자유로움을 제공한다.
따라서 우리가 tsconfig.json 파일의 내용을 수정하면서 이런 저런 옵션을 설정 가능한데 타입 검사를 매우 엄격하게 하려면 어떤 값으로 설정해야 할까?

- "strict" : true

Quiz 5
아래 코드처럼 number 타입의 변수에 null 값을 할당하려고 해요.
`let num: number = null`
이 코드는 엄격한 타입 검사가 활성화 되어 있을 때에는 오류로 판단되는데
만약 위 코드를 오류가 아닌 것으로 판단하게 하려면 어떤 옵션을 값으로 지정해야 될까요?

- "strictNullChecks" : false