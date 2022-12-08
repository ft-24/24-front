import { useEffect, useState } from "react";
import styled from "styled-components";
import CreateGameRoom from "../../../components/modals/CreateGameRoom";
import ModalPortal from "../../../components/modals/ModalPotal";
import SectionHeader from "../../../components/SectionHeader";
import SimpleCard from "../../../components/SimpleCard";
import useSocket from "../../../context/useSocket";
import GameCard from "./GameCard";
import { GameRoomInfo } from "./GameRoomInfo";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--dark-gray);
`

const NoticeSection = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	font-family: NanumSquareB;
	margin-right: 0.5rem;
`

const ChannelSection = styled.div`
	flex: 5;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-x:hidden;
	overflow-y:scroll;
	&::-webkit-scrollbar{
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb{
		background-color: var(--yellow);
		border-radius: 10px;
	}
	&::-webkit-scrollbar-track{
		background-color: rgba(0,0,0,0);
	}
`

const ContentHeader = styled.div`
	width: 100%;
	display: block;
	font-family: SBAggroM;
	font-size: 1.5rem;
	padding: 0.5rem;
	background: var(--purple);
	text-shadow: 0 2px 0 black;
`

const ChannelContainer = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const EmptyText = styled.div`
	padding: 1rem;
`

const CreateButton = styled.button`
	position: absolute;
	z-index: 2;
  right: 1rem;
	bottom: 1rem;
	border: none;
	border-radius: 10px;
	background-color: var(--yellow);
`

const RefreshButton = styled.button`
	position: absolute;
	z-index: 2;
  left: 1rem;
	bottom: 1rem;
	border: none;
	border-radius: 10px;
	background-color: var(--yellow);
`

const ButtonText = styled.div`
	margin: 1rem;
	font-size: 1rem;
	color: black;
`

const GameList = ({ toggleInfo, setTitle }: any) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [list, setList] = useState<GameRoomInfo[]>();
  const { socket } = useSocket();

  const RefreshList = () => {
    if (socket) {
      socket.emit('refresh');
      socket.on('list', (data: GameRoomInfo[]) => {
        if (data) {
          setList([...data]);
          socket.off('list');
        }
      })
    }
  }

  useEffect(() => {
    RefreshList();
    return () => {
      socket?.off('list');
    }
  }, [socket]);

  const onClickCreate = () => {
    setIsModalOn(true);
  }

  const onClickRefresh = () => {
    if (!isModalOn) {
      RefreshList();
    }
  }

  return (
    <Container>
      <SectionHeader color='var(--purple)' title="Welcome to Pong Game World!" />
      <ContentHeader>공지사항</ContentHeader>
      <NoticeSection>
        <SimpleCard text="매너있는 플레이 부탁드립니다." />
      </NoticeSection>
      <ContentHeader>공개채널</ContentHeader>
      <ChannelSection>
        <ChannelContainer>
          {
            list && (list.length > 0) ? list.map((item: GameRoomInfo, index) => (
              <GameCard
                key={index}
                toggleInfo={toggleInfo}
                info={item}
                setTitle={setTitle} />
            )) : <EmptyText>열려있는 게임이 없어요...</EmptyText>
          }
          <RefreshButton onClick={onClickRefresh}>
            <ButtonText>새로고침</ButtonText>
          </RefreshButton>
          <CreateButton onClick={onClickCreate}>
            <ButtonText>새 방 만들기</ButtonText>
          </CreateButton>
        </ChannelContainer>
      </ChannelSection>
      {isModalOn ? <ModalPortal>
        <CreateGameRoom modalHandler={() => setIsModalOn(false)} />
      </ModalPortal>
        : null}
    </Container>
  );
}

export default GameList;
