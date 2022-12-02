import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import PlayerCard from "./PlayerCard";

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

class Player {
  intra: string;
  nickname: string;
  image: string;

  constructor(i: string, n: string, img: string) {
    this.intra = i;
		this.nickname = n;
		this.image = img;
  }
}

const GameRoom = ({setLocate, title} : any) => {
  let playerList = new Array<Player>();
	let spectatorList = new Array<Player>();

	playerList.push(new Player("sunhkim", "mocha-kim", "/src/images/earth.jpg"));
	playerList.push(new Player("yoahn", "yoahn", "/src/images/game.jpg"));

	spectatorList.push(new Player("seonhjeo", "seonhjeo", "some link"))
	spectatorList.push(new Player("chanhuil", "chanhuil", "some link"))
	spectatorList.push(new Player("young-ch", "young-ch", "some link"))

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
				<ContentHeader>관전중인 사람들</ContentHeader>
				<SpectatorContainer>
					{
						spectatorList.map((item : Player, index) => (
							<PlayerCard key={index}	 type="spectator" player={item}></PlayerCard>
						))
					}
				</SpectatorContainer>
			</UserInfoContainer>
			{/* <GameWindow /> */}
		</Container>
	);
}

export default GameRoom;