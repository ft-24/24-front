import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";
import { PongGame } from "../game/PongGame";
import PlayerCard from "../../components/PlayerCard";
import PlayerInfo from "../lobby/components/PlayerInfo";
import { useState, createContext, useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useQueueDispatch, useQueueState } from "../../context/QueueHooks";
import useSocket from "../../context/useSocket";
import { GameRoomInfo } from "../lobby/components/GameRoomInfo";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/src/images/background.jpg");
  font-family: NanumSquareL;
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: var(--dark-gray);
`;

const UserInfoContainer = styled.div`
  position: relative;
  max-width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 60px 4fr;
  grid-template-areas:
    "player title"
    "player spectator";
  & > * {
    display: flex;
    white-space: pre-line;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    font-family: SBAggroM;
  }
`;

const PlayerContainer = styled.div`
  grid-area: player;
  border-width: 1px;
  border-style: hidden solid hidden hidden;
  margin: auto 0;
  display: flex;
  height: 20vh;
  justify-content: center;
  background: var(--light-gray);
`;

const Versus = styled.div`
  width: 5vw;
  text-align: center;
  line-height: 20vh;
`;

const SpectatorContainer = styled.div`
  padding: 0 0.5rem;
  grid-area: spectator;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: var(--light-gray);
`;

const ContentHeader = styled.div`
  border-width: 1px;
  border-style: hidden hidden solid;
  grid-area: title;
  width: 100%;
  display: block;
  font-family: SBAggroM;
  height: 60px;
  font-size: 1.5rem;
  padding: 1rem;
  background: var(--dark-gray);
  text-shadow: 0 2px 0 black;
`;

const GameContainer = styled.div`
  border-width: 1px;
  border-style: solid hidden hidden hidden;
  background: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export enum PlayerState {
  stay = 1,
  ready = 2,
  gaming = 3,
  gameEnd = 4
}

export const ReadyContext = createContext({
  pState: PlayerState.stay,
  setPState: (active: PlayerState) => {},
});

const GameRoom = () => {
  const [pState, setPState] = useState<PlayerState>(PlayerState.stay);
  const value = { pState, setPState };
  const navigate = useNavigate();
  const {room, id} = useQueueState();
  const {socket} = useSocket();
  const dispatch = useQueueDispatch();

  const RefreshRoom = () => {
    if (socket && id) {
      console.log("refresh room entered, id : ",id);
      socket.emit('get', {id:id});
      socket.on('get', (data: GameRoomInfo) => {
      console.log("thisisdata",data);
        if (data) {
          dispatch({type:"ENTER_ROOM", roominfo:data});
        }
      })
    }
  }

  useEffect(() => {
    RefreshRoom();
    return () => {
      socket?.off('get');
    }
  }, [socket, id]);


  return (
    <Wrapper>
      <Container>
        <button onClick={()=>{RefreshRoom()}}>REFRESH</button>
        <ReadyContext.Provider value={value}>
          <SectionHeader color="var(--dark-gray)" title={room?.name}>
            <div onClick={() => navigate(-1)}>{"나가기"}</div>
          </SectionHeader>
          <UserInfoContainer>
            <PlayerContainer>
              {room?.player_list[0] ? (
                <PlayerCard type="purple" player={room.player_list[0]} />
              ) : null}
              <Versus> vs </Versus>
              {room?.player_list[1] ? (
                <PlayerCard type="yellow" player={room.player_list[1]} />
              ) : null}
            </PlayerContainer>
            <ContentHeader>관전중인 사람들</ContentHeader>
            <SpectatorContainer>
              {room?.spectator_list.map((item: PlayerInfo, index) => (
                <PlayerCard
                  key={index}
                  type="spectator"
                  player={item}
                ></PlayerCard>
              ))}
            </SpectatorContainer>
          </UserInfoContainer>
          <GameContainer>
            <PongGame />
          </GameContainer>
        </ReadyContext.Provider>
      </Container>
    </Wrapper>
  );
};

export default GameRoom;