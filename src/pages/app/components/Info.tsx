import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-items: flex-start;
	align-items: center;
	padding: 1rem;
	border-left: 1px solid white;
	background: var(--dark-gray);
`

const ControlSection = styled.div`
	width: 100%;
	flex: 1 10%;
	display: flex;
	justify-content: space-between;
`

const ProfileSection = styled.div`
	width: 100%;
	flex: 1 60%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	`

const IconSection = styled.div`
	background: var(--light-gray);
	border-radius: 1rem;
	width: 100%;
	flex: 1 30%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`



const Info = ({setIsInfoOn} : any) => {
	return (
		<Container>
			<ControlSection>
				<p onClick={()=>setIsInfoOn(false)}>⏪</p>
				<p>🔧</p>
			</ControlSection>
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
