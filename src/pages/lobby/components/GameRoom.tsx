import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import { PongGame } from "../../game/PongGame";
import PlayerCard from "../../../components/PlayerCard";
import PlayerInfo from "./PlayerInfo";
import { useState, createContext, useContext } from "react";

const Container = styled.div`
	position: relative;
	max-width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	background: var(--dark-gray);
`

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
    background: rgba( 0, 0, 0, 0 );
    font-family: SBAggroM;
  }
`

const PlayerContainer = styled.div`
	grid-area: player;
	border-width: 1px;
	border-style: hidden solid hidden hidden;
	margin: auto 0;
	display: flex;
	height: 20vh;
	justify-content: center;
	background: var(--light-gray);
`

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

export enum PlayerState
{
  stay=1, ready=2, gaming=3
}

export const ReadyContext = createContext({
  pState: PlayerState.stay,
  setPState: (active: PlayerState) => {}
});

const GameRoom = ({setLocate, title} : any) => {
  const [pState, setPState] = useState<PlayerState>(PlayerState.stay);
  const value = { pState, setPState };

  let playerList = new Array<PlayerInfo>();
	let spectatorList = new Array<PlayerInfo>();

	playerList.push(new PlayerInfo("seonhjeo", "seonhjeo", "/src/images/earth.jpg", 1500, true));
	playerList.push(new PlayerInfo("yoahn", "yoahn", "/src/images/game.jpg", 1200, true));

	spectatorList.push(new PlayerInfo("seonhjeo", "seonhjeo", "some link", 1500, true))
	spectatorList.push(new PlayerInfo("chanhuil", "chanhuil", "some link", 1600, false))
	spectatorList.push(new PlayerInfo("young-ch", "young-ch", "some link", 1600, false))

	return (
		<Container>
      <ReadyContext.Provider value={value}>
			<SectionHeader color='var(--dark-gray)' title={title}>
				<div onClick={()=>setLocate("home")}>{"나가기"}</div>
			</SectionHeader>
			<UserInfoContainer>
				<PlayerContainer>
					{playerList[0] ? <PlayerCard type="purple" player={playerList[0]} /> : null}
					<Versus> vs </Versus>
					{playerList[1] ? <PlayerCard type="yellow" player={playerList[1]} />: null}
				</PlayerContainer>
				<ContentHeader>관전중인 사람들</ContentHeader>
				<SpectatorContainer>
					{
						spectatorList.map((item : PlayerInfo, index) => (
							<PlayerCard key={index}	 type="spectator" player={item}></PlayerCard>
						))
					}
				</SpectatorContainer>
			</UserInfoContainer>
			<GameContainer>
				<PongGame />
			</GameContainer>
      </ReadyContext.Provider>
		</Container>
	);
}

export default GameRoom;