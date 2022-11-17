import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";
import PlayerCard from "./PlayerCard";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-items: flex-start;
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
	padding: 0.5rem;	
	background: var(--light-gray);
	text-shadow: 0 2px 0 black;
`;

const PlayerSection = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const IconSection = styled.div`
	background: var(--light-gray);
	border-radius: 1rem 1rem 0 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

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

const GameInfo = ({setInfo, title} : any) => {
  let playerList = new Array<Player>(0);
	let spectatorList = new Array<Player>(0);

	playerList.push(new Player("sunhkim", "sunhkim", "some link"));
	playerList.push(new Player("yoahn", "yoahn", "some link"));

	spectatorList.push(new Player("seonhjeo", "seonhjeo", "some link"))
	spectatorList.push(new Player("chanhuil", "chanhuil", "some link"))
	spectatorList.push(new Player("young-ch", "young-ch", "some link"))

	return (
		<Container>
			<SectionHeader color='var(--purple)'>
				{setInfo ? <div onClick={()=>setInfo(false)}>{"X"}</div> : null}
			</SectionHeader>
			<Title>{title}</Title>
			<ContentHeader>게임하는 사람들</ContentHeader>	
			<PlayerSection>
				{
					playerList.map((item : Player, index) => (
						<PlayerCard key={index} type="spectator" intra={item.intra}></PlayerCard>
					))
				}
			</PlayerSection>
			<ContentHeader>관전중인 사람들</ContentHeader>	
			<PlayerSection>
				{
					spectatorList.map((item : Player, index) => (
						<PlayerCard key={index}	 type="spectator" intra={item.intra}></PlayerCard>
					))
				}
			</PlayerSection>
			<IconSection>	
			</IconSection>
		</Container>
	)
}

export default GameInfo;
