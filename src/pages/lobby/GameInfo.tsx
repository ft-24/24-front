import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";

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

const ProfileSection = styled.div`
	width: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const IconSection = styled.div`
	background: var(--light-gray);
	border-radius: 1rem;
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

const GameInfo = ({setIsInfoOn} : any) => {
	let toggle = false;
	return (
		<Container>
			<SectionHeader color='var(--purple)'>
				<div onClick={()=>setIsInfoOn(toggle = !toggle)}>{"<<"}</div>
				<div>Q</div>
			</SectionHeader>
			<IconSection>	
			</IconSection>
		</Container>
	)
}

export default GameInfo;
