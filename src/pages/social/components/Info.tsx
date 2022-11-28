import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import SectionHeader from "../../../components/SectionHeader";
import IconButton from "./IconButton";

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
	border-radius: 1rem 1rem 0 0;
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

const Info = ({setIsInfoOn} : any) => {

	const onClickAdd = () => {
		console.log("onClickAdd");
	}

	const onClickPlay = () => {
		console.log("onClickPlay");
	}

	const onClickBlock = () => {
		console.log("onClickBlock");
	}
	return (
		<Container>
			<SectionHeader color='var(--purple)'>
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
				<IconButton onClickButton={onClickAdd} icon="❤️" text="친구추가" />
				<IconButton onClickButton={onClickPlay} icon="🎮" text="게임" />
				<IconButton onClickButton={onClickBlock} icon="❌" text="차단" />
			</IconSection>
		</Container>
	)
}

export default Info;
