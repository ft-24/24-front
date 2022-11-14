import { useState } from "react";
import styled from "styled-components";
import GameInfo from "./GameInfo";
import GameList from "./GameList";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url("/src/images/background.jpg");
	font-family: NanumSquareL;
`;

const Container = styled.div`
	width: 90%;
	height: 80%;
	display: flex;
`;

const MainSection = styled.div`
	flex: 4;
	overflow: hidden;
`;

const InfoSection = styled.div`
	flex: 2;	
`;

const Lobby = () => {
	const [locate, setLocate] = useState("home");
	const [info, setIsInfoOn] = useState(false);

	return (
		<Wrapper>
			<Container>
				<MainSection>
					<GameList />
				</MainSection>
				{info ? (
					<InfoSection>
						<GameInfo setIsInfoOn={setIsInfoOn} />
					</InfoSection>
				) : null}
			</Container>
		</Wrapper>
	);
};

export default Lobby;