import styled from "styled-components";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { useState } from "react";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image : url("/src/images/background.jpg");
	font-family:NanumSquareL;
`

const Container = styled.div`
	width: 90%;
	height: 80%;
	display: flex;
`

const NavSection = styled.div`
	flex: 0;
`

const MainSection = styled.div`
	flex: 4;
	overflow: hidden;
`

const InfoSection = styled.div`
	flex: 1.5;
`

const DetailSection = styled.div`
	flex: 1.5;
	background: var(--dark-gray);
`

const App = () => {
	const [locate, setLocate] = useState("home");
	const [isInfoOn, setIsInfoOn] = useState(true);
	const [isDetailOn, setIsDetailOn] = useState(false);

	return (
		<Wrapper>
			<Container>
				<NavSection>
					<Nav setLocate={setLocate} setIsDetailOn={setIsDetailOn}/>
				</NavSection>
				{isDetailOn ? <>
				<DetailSection>
					<Detail setIsDetailOn={setIsDetailOn}/>
				</DetailSection>
				</> : <></>
				}
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
