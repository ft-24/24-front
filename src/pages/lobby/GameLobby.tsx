import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";
import GameInfo from "./GameInfo";
import PlayerCard from "./PlayerCard";

const Container = styled.div`
	position: relative;
	max-width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--light-gray);
	overflow-x: hidden;
`

const PlayerContainer = styled.div`
	margin: auto 0;
	display: flex;
	justify-content: center;
	background: var(--light-gray);
`

const Versus = styled.div`
	width: 5vw;	
	text-align: center;
	line-height: 100px;
`;

const SpectatorContainer = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	flex-wrap: wrap;
	background: var(--light-gray);
`

const ContentHeader = styled.div`
	width: 100%;
	display: block;
	font-family: SBAggroM;
	font-size: 1.5rem;
	padding: 0.5rem;	
	background: var(--dark-gray);
	text-shadow: 0 2px 0 black;
`

const GameLobby = ({setLocate, title} : any) => {
	return (
		<Container>
			<SectionHeader color='var(--dark-gray)' title={title}>
				<div onClick={()=>setLocate("home")}>{"나가기"}</div>
			</SectionHeader>
			<div>
				<PlayerContainer>
					<PlayerCard type="me" intra="sunhkim"></PlayerCard>
					<Versus> vs </Versus>
					<PlayerCard type="opponent" intra="yoahn"></PlayerCard>
				</PlayerContainer>
				<ContentHeader>구경하는 사람들</ContentHeader>
				<SpectatorContainer>
					<PlayerCard type="spectator" intra="seonhjeo"></PlayerCard>
					<PlayerCard type="spectator" intra="chanhuil"></PlayerCard>
					<PlayerCard type="spectator" intra="young-ch"></PlayerCard>
				</SpectatorContainer>
			</div>
			<GameInfo />
		</Container>
	);
}

export default GameLobby;