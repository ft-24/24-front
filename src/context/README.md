QueueStateContext는 queue_state로 5가지 상태를 지닙니다. "INQUEUE", "ENTER", "GETQUEUE", "UPDATE", "NONE"

---

"INQUEUE" : 현재 유저의 큐 상태를 "INQUEUE"로 변경합니다.

>> 홈 화면에서 레더 버튼을 누르면, `socket.emit("랜덤 큐에 넣어주세요");` 요청을 보내주세요. (미구현)
>> 그 이후에 header 컴포넌트에서 `socket.on("큐가 잡혔어요")`에 걸리게 되면, (미구현)
>> (private game 초대도 받아야 하기 때문에, useEffect로 로그인 한 이후 처음부터 on 되어있어야 좋을 것 같습니다.) (미구현)
>> 이후에 설명 할 상태인 "GETQUEUE"로 변경해주세요. (미구현)
>> ex) socket.on("큐가 잡혔어요", data => dispatch({type:"GETQUEUE", payload:data}))

---

"ENTER" : 접속 할 게임방의 id를 컨텍스트에 저장합니다. (페이지 이동후에 id를 가지고 "UPDATE")

>> 공개방을 만들때, 게임방의 id를 받아아서 컨텍스트에 저장하고 `navigate("/game");` 하고 있습니다. (구현)

---

"GETQUEUE" : 유저가 방을 직접 들어가지 않고, 랜덤 큐가 잡히거나 다른 유저에게 초대를 받았을 때 입니다.
동작은 "ENTER"와 같습니다. 모달창 제어에 필요해서 나뉘어진 state입니다.

>> "INQUEUE" 상태에서 서버에서 큐가 잡히게 된다면 해당 메소드로 emit을 보낼텐데, 이때 서버에서 바디에 방에 id를 담아서 보내주세요. (미구현)
>> ex) `socket.on("큐가 잡혔어요", data => dispatch({type:"GETQUEUE", payload:data}))`
>> 그러면 MatchingModal이 뜨게되고 수락하면 `navigate("/game")`, 거절시 `dispatch({type:"NONE"})` (구현)

---

+ "ENTER"와 "GETQUEUE"
>> "ENTER" 와 "GETQUEUE" 두가지 상태가 id만 가지고 있다가 게임페이지에서 id를 기반으로 update를 해서,
>> 전체 정보를 받아오는 것이 좋다고 생각해서 위 두가지 상태를 만들었습니다.
>> ex) creatGameRoom에서 공개 방을 만들 때, (구현)
>> 1. `socket.emit('make-room')` // emit의 response로 id를 받음
>> 2. `socket.emit('join')` // id를 body에 담아서 해당 id의 게임방에 접속한다고 알림 이후 `navagate("/game")`
>> 3. 페이지 이동 후 컨텍스트에 있는 id로 해당 방의 최신 데이터 갱신 `socket.emit('get', (data)=>{dispatch({type:"UPDATE", payload:data})})`

---

"UPDATE" : "ENTER" 상태에서 얻은 id를 이용해서 받은 gameRoomInfo를 컨텍스트에 저장합니다.
>> ex) lobby에서 공개방에 접속 할 때,
>> 현재 공개방 리스트를 받아올 때 gameRoomInfo의 배열로 받아오고, 그 배열을 이용해서 GameCard를 만들게 됩니다.
>> GameCard는 onClick 이벤트로 해당 gameRoomInfo를 "UPDATE"를 하고, setInfoOn으로 오른쪽 사이드바(GameInfo)를 열게 됩니다.
>> GameInfo에서는 현재 컨텍스트에 저장된 room_info(gameRoomInfo)를 사용해서 화면을 그리고 입장버튼을 누르면,
>> 소켓으로 join 메세지를 보내고 game 페이지로 이동합니다.
>> 이동후에는 입장하는 동안 게임방의 데이터가 바뀌었을 때를 대비해서,
>> 다시 `socket.emit('get')`으로 최신 정보를 받아와서 "UPDATE" 해주고 있습니다.
>>
>> 추가로 관전자 접속, 상대 레디, 상대 떠남 등 게임방의 데이터가 변화하는 다양한 상황을 대비해서,
>> game 페이지에서는 `socket.on("관전자접속")`, `socket.on("player1 준비완료")`, `socket.on("상대떠남")` 등
>> useEffect로 미리 on을 해두면 좋을 것 같습니다.
>> ex) `socket.on("player1 준비완료", ()=>{socket.emit("get", (data)=> {dispatch({type:update, payload:data})})})`

---

"NONE" : 유저가 게임과는 연관이 없어지고 컨텍스트에 있는 상태를 제외한 다른 데이터를 제거합니다.
>> <RequireAuth/>처럼 useLocation 훅(react-router-dom)을 이용해서,
>> queue_state가 "UPDATE"(queue_state의 최종상태)인데 "/game"이 아닌 다른 페이지면 `dispatch({type:"NONE"})`
>> 하는 것도 좋을 거 같아요. (미구현)

---

3줄요약
1. "INQUEUE" 큐대기, "ENTER, GETQUEUE" 방에 들어가기전 id를 컨텍스트에 저장,
2. "UPDATE" 컨텍스트의 id 기준으로 새정보, "NONE" `free(컨텍스트)`,

---

PS.
QueueContext에 대한 주석을 README로 남깁니다.
이전에 중구난방으로 있던 queue_state를 총 다섯가지 상황으로 나누고,
이전에 구현한 코드에 대해서는 수정까지 마쳤습니다.
서버가 없어서 실제로 테스트 해보지 못하기 때문에 최대한 신경쓰면서 수정을 했는데,
혹시나 오류가 난다면 너그러이 고쳐주시고,
더 좋은 방법이 있다면 얼마든지 수정하셔도 좋습니다.
화이팅!
