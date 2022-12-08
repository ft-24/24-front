import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import styled from "styled-components";
import CardWrapper from "../../../components/PlayerCard";
import PlayerInfo from "./PlayerInfo";
import SectionHeader from "../../../components/SectionHeader";
import { useQueueDispatch, useQueueState } from "../../../context/QueueHooks";
import { useNavigate } from "react-router-dom";
import useSocket from "../../../context/useSocket";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-left: 1px solid white;
	background: var(--dark-gray);
	font-family:NanumSquareL;
`

const Title = styled.div`
	width: 100%;
	display: block;
	font-family: SBAggroM;
	font-size: 1.5rem;
	padding: 0.5rem;
	background: var(--purple);
	text-shadow: 0 2px 0 black;
`

const ContentHeader = styled.div`
	width: 100%;
	display: block;
	font-family: SBAggroM;
	font-size: 1.5rem;
	line-height: 60px;
  height: 60px;
	padding: 0.5rem;
	background: var(--light-gray);
	text-shadow: 0 2px 0 black;
`;

const PlayerSection = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-items: flex-start;
	flex: 2;
`;

const IconSection = styled.div`
	background: var(--light-gray);
	border-radius: 1rem 1rem 0 0;
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

type DynamicSize = {
  size: string;
}

const Image = styled.img<DynamicSize>`
  display: block;
  width: ${props=>props.size};
  height: ${props=>props.size};
	background: none;
`;

const StyledButton = styled.button`
	position: relative;
  border: none;
	width: 4rem;
	height: 1rem;
  background: rgba(0, 0, 0, 0);
`;

const Text = styled.div`
	position: absolute;
	width: 4rem;
	top: 0%;
  background: none;
	font-family: SBAggroM;
`;

const GameInfo = ({setInfo, setLocate} : any) => {
  const [hover, setHover] = useState(false);
	const {room_info} = useQueueState();
	const {socket} = useSocket();
	const navigate = useNavigate();

	const enterLobby = () => {
		socket?.emit("join", {id:room_info?.id});
		navigate("/game");
	}

	return (
		<Container>
			<SectionHeader color='var(--purple)'>
				{setInfo ? <div onClick={()=>setInfo(false)}>{"X"}</div> : null}
			</SectionHeader>
			<Title>{room_info?.name}</Title>
			<ContentHeader>게임하는 사람들</ContentHeader>
			<PlayerSection>
				{
					room_info?.player_list.map((item : PlayerInfo, index) => (
						<CardWrapper key={index} type="spectator" player={item} isReady={false}></CardWrapper>

					))
				}
			</PlayerSection>
			<ContentHeader>관전중인 사람들</ContentHeader>
			<PlayerSection>
				{
					room_info?.spectator_list.map((item : PlayerInfo, index) => (
						<CardWrapper key={index} type="spectator" player={item} isReady={false}></CardWrapper>
					))
				}
			</PlayerSection>
			<IconSection>
				<StyledButton
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => enterLobby()}
					>
					{hover ?
						<>
							<motion.div
								style={{ position: "absolute", top: "-2.5rem", left: "-2.5rem"}}
								animate={{ opacity: 1 }}
								transition={{ from: 0, duration: 0.1 }}
								>
								<Image src="/src/images/splash1.png" size="7rem" z-index="2"/>
							</motion.div>
							<motion.div
								style={{ position: "absolute", bottom: "-1rem", right: "-2rem"}}
								animate={{ opacity: 1 }}
								transition={{ from: 0, duration: 0.3 }}
								>
								<Image src="/src/images/splash2.png" size="5rem" z-index="1"/>
							</motion.div>
						</>
					: null}
					<Text>입장하기</Text>
				</StyledButton>
			</IconSection>
		</Container>
	)
}

export default GameInfo;
