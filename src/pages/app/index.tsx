import styled from "styled-components";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Chat from "./components/Chat";
import Home from "./components/Home";
import { useState } from "react";

const Wrapper = styled.div`
	height: 100vh;
	padding: 4rem;
	background: var(--light-gray);
`

const Container = styled.div`
	height:100%;
	display: flex;
	border-radius: 2rem;
	padding: 1rem;
`

const NavSection = styled.div`
	width: 10%;
	height: 100%;
`

const MainSection = styled.div`
	flex: 1 70%;
	height: 100%;
	overflow: auto;
`

const InfoSection = styled.div`
	flex: 1 20%;
	height: 100%;
`

const App = () => {
	const [locate, setLocate] = useState("home");
	const [isInfoOn, setIsInfoOn] = useState(true);

	return (
		<Wrapper>
			<Container>
				<NavSection>
					<Nav setLocate={setLocate}/>
				</NavSection>
				<MainSection>
					{locate === "home" ? <Home setIsInfoOn={setIsInfoOn}></Home>
					: <></>}
					{locate === "dm" ? <Chat setIsInfoOn={setIsInfoOn}></Chat> : <></>}
				</MainSection>
				{isInfoOn ? <>
				<InfoSection>
					<Info setIsInfoOn={setIsInfoOn}/>
				</InfoSection>
				</> : <></>}
			</Container>
		</Wrapper>
	);
}

export default App;
