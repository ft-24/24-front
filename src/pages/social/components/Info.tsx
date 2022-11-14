import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import SectionHeader from "./SectionHeader";

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

const Info = ({setIsInfoOn} : any) => {
	return (
		<Container>
			<SectionHeader>
				<div onClick={()=>setIsInfoOn(false)}>{"<<"}</div>
				<div>Q</div>
			</SectionHeader>
			<ProfileSection>
				<Avatar.txt size="5">😊</Avatar.txt>
				<br></br>
				<p>Young il, Cho</p>
				<p>🎖️ 100</p>
			</ProfileSection>
			<IconSection>
				<Avatar.txt size="3">❤️</Avatar.txt>
				<Avatar.txt size="3">🎮</Avatar.txt>
				<Avatar.txt size="3">❌</Avatar.txt>
			</IconSection>
		</Container>
	)
}

export default Info;
