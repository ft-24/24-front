import { useState } from "react";
import styled from "styled-components";
import UserInfo from "../social/components/UserInfo";
import FriendsList from "./components/FriendsList";
import { useAuthState } from "../../context/AuthHooks";
import GameRoom from "../ingame";

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

const Private = () => {
	const [locate, setLocate] = useState("home");
	const [isInfoOn, setIsInfoOn] = useState(false);
	const [infoIntra, setInfoIntra] = useState("");
	const state = useAuthState();

	return (
		<Wrapper>
			<Container>
				<MainSection>
          {locate === "home" ? <FriendsList setIsInfoOn={() => setIsInfoOn(true)} setInfoIntra={setInfoIntra} /> : null}
          {locate === "lobby" ? <GameRoom /> : null}
				</MainSection>
				{isInfoOn ? (
					<InfoSection>
						<UserInfo setIsInfoOn={setIsInfoOn} userIntra={infoIntra} />
					</InfoSection>
				) : null}
			</Container>
		</Wrapper>
	);
};

export default Private;