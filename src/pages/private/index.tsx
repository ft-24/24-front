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
	const [info, setInfo] = useState(false);
	const [data, setData] = useState<UserProps | null>(null);
	const state = useAuthState();

	return (
		<Wrapper>
			<Container>
				<MainSection>
          {locate === "home" ? <FriendsList setIsInfoOn={() => setInfo(true)} setData={setData}></FriendsList> : null}
          {locate === "lobby" ? <PrivateGameRoom setLocate={setLocate} title={state.nickname + (data? data.nickname : "undefined")}></PrivateGameRoom> : null}
				</MainSection>
				{info ? (
					<InfoSection>
						<Info setIsInfoOn={() => setInfo(true)} data={data} />
					</InfoSection>
				) : null}
			</Container>
		</Wrapper>
	);
};

export default Private;