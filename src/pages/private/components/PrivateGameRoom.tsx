import styled from "styled-components";
import PongGame from "../../game/PongGame";
import PlayerCard from "../../../components/PlayerCard";
import SectionHeader from "../../../components/SectionHeader";
import PlayerInfo from "../../lobby/components/PlayerInfo";

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

const GameContainer = styled.div`
	border-width: 1px;
	border-style: solid hidden hidden hidden;
	background: var(--light-gray);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const PrivateGameRoom = ({setLocate, title} : any) => {
  let playerList = new Array<PlayerInfo>();

	playerList.push(new PlayerInfo("sunhkim", "mocha-kim", "/src/images/earth.jpg", 1500));
	playerList.push(new PlayerInfo("yoahn", "yoahn", "/src/images/game.jpg", 1200));

	return (
		<Container>
			<SectionHeader color='var(--dark-gray)' title={title}>
				<div onClick={()=>setLocate("home")}>{"나가기"}</div>
			</SectionHeader>
			<UserInfoContainer>
				<PlayerContainer>
					{playerList[0] ? <PlayerCard type="purple" player={playerList[0]} /> : null}
					<Versus> vs </Versus>
					{playerList[1] ? <PlayerCard type="yellow" player={playerList[1]} />: null}
				</PlayerContainer>
			</UserInfoContainer>
			<GameContainer>
				<PongGame />
			</GameContainer>
		</Container>
	);
}

export default PrivateGameRoom;