import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQueueDispatch } from "../../context/QueueHooks";
import useSocket from "../../context/useSocket";
import GameInfo from "./components/GameInfo";
import GameList from "./components/GameList";
import GameRoom from "../ingame/index";

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
	width: 90%;
	height: 80%;
	display: flex;
`;

const MainSection = styled.div`
	flex: 4;
	overflow: hidden;
`;

const InfoSection = styled.div`
	flex: 2;
`;

const Lobby = () => {
	const [locate, setLocate] = useState("home");
	const [info, setInfo] = useState(false);
	const [title, setTitle] = useState("");
	const [roomId, setRoomId] = useState("");

	const toggleInfo = () => {
		info ? setInfo(false) : setInfo(true);
	}

	return (
		<Wrapper>
			<Container>
				<MainSection>
          {locate === "home" ? <GameList toggleInfo={toggleInfo} setTitle={setTitle}></GameList> : null}
          {locate === "lobby" ? <GameRoom></GameRoom> : null}
				</MainSection>
				{info ? (
					<InfoSection>
						<GameInfo setInfo={setInfo} setLocate={setLocate} title={title} id={roomId}/>
					</InfoSection>
				) : null}
			</Container>
		</Wrapper>
	);
};

export default Lobby;
