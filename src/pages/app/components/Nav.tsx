import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border-right: 1px solid white;
	background: var(--dark-gray);
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
		font-size: 1rem;
	}
`

const Button = styled.div`
	&:hover {
		transform: scale(1.5);
	}
`

const Nav = ({setLocate} : any) => {
	return (
			<Container>
				<div>LOGO</div>
				<IconSection>
					<Button onClick={()=>setLocate("home")}>🏠</Button>
					<Button onClick={()=>setLocate("dm")}>👨‍👧‍👦</Button>
					<Button onClick={()=>setLocate("dm")}>🤫</Button>
				</IconSection>
				<div>
				<Avatar.txt>😊</Avatar.txt>
				</div>
			</Container>
	)
}

export default Nav;
