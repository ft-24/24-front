import { useState } from "react";
import styled from "styled-components";
import PrivateGameRoom from "./components/PrivateGameRoom";
import Info from "../social/components/Info";
import FriendsList from "./components/FriendsList";
import { UserProps } from "../profile/UserProps";
import { useAuthState } from "../../context/AuthHooks";

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
          {locate === "lobby" ? <PrivateGameRoom setLocate={setLocate} title={state.nickname + (infoIntra ? infoIntra : "undefined")} /> : null}
				</MainSection>
				{isInfoOn ? (
					<InfoSection>
						<Info setIsInfoOn={setIsInfoOn} intra={infoIntra} />
					</InfoSection>
				) : null}
			</Container>
		</Wrapper>
	);
};

export default Private;