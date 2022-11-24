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
	overflow-x: hidden;
	background: var(--dark-gray);
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
	position: relative;
	width: 100%;
	height: 100%;
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

const GameRoom = ({setLocate, title} : any) => {
	return (
		<Container>
			<SectionHeader color='var(--dark-gray)' title={title}>
				<div onClick={()=>setLocate("home")}>{"나가기"}</div>
			</SectionHeader>
			<>
				<PlayerContainer>
					<PlayerCard type="me" intra="sunhkim"></PlayerCard>
					<Versus> vs </Versus>
					<PlayerCard type="opponent" intra="yoahn"></PlayerCard>
				</PlayerContainer>
				{/* <GameWindow /> */}
				<ContentHeader>구경하는 사람들</ContentHeader>
				<SpectatorContainer>
					<PlayerCard type="spectator" intra="seonhjeo"></PlayerCard>
					<PlayerCard type="spectator" intra="chanhuil"></PlayerCard>
					<PlayerCard type="spectator" intra="young-ch"></PlayerCard>
				</SpectatorContainer>
			</>
		</Container>
	);
}

export default GameRoom;