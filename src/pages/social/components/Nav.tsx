import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 1rem;
	border-right: 1px solid white;
	background: var(--purple);
`

const IconSection = styled.div`
	flex: 1 50%;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 4rem;
	align-items: center;
	& > * {
		font-size: 2rem;
	}
`

const Button = styled.div`
	margin: 1rem 0;
	&:hover {
		transform: scale(1.5);
	}
`

const Nav = ({setLocate, setIsListOn, setIsInfoOn} : any) => {
	return (
			<Container>
				LOGO
				<IconSection>
					<Button onClick={()=>{setLocate("home"); setIsListOn(false); setIsInfoOn(false);}}>🏠</Button>
					<Button onClick={()=>{setIsListOn(true);}}>👨‍👧‍👦</Button>
					<Button onClick={()=>{setIsListOn(true);}}>🤫</Button>
				</IconSection>
				<p>you</p>
				<Avatar.txt size="3" onClick={()=>{setIsInfoOn(true);}}>😊</Avatar.txt>
			</Container>
	)
}

export default Nav;
