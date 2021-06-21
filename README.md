# [콜버스랩] 방 등록 구현하기

---

### 구현하지 못한 기능에 대해서 생각하신 구현 방법에 대해 서술하기

1. 입력하는 중간에 페이지에서 나가는 경우 경우 다시 접속할 때 이어서 입력여부를 받습니다.
- 페이지 unmount 시, sessionStorage에 입력 state 저장.
- 재접속 시, "이어서 입력여부" 확인하는 모달창 on.
- true면 sessionStorage 저장된 state로 초기화 / false면 기본값(null, 0, "" 등)으로 초기화

2. 방이 내려져 있는 경우 - 이전에 입력한 내용을 수정해서 올리기가 가능합니다.
- radiobox(택1) 선택 기능은 selected 구현. 조건은 name === state
- checkbox 선택 기능은 selected 구현. 조건은 checked 된 값(name) 배열에 담아서 포함된 요소만 checked


