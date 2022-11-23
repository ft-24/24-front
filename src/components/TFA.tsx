import { useState, useEffect } from "react";
import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom";

import TFAInputForm from "./TFAInputForm";

const Container = styled.div`
	width: 25rem;
	height: 35rem;
	background: var(--white);
	color: var(--dark-gray);
	border-radius: 2rem;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	& > h1 {
		display: inline-block;
		font-weight: 800;
		font-size: 1.5rem;
	}
`

const ImgWrapper = styled.div`
	width: 10rem;
	height: 10rem;
	background-image: url('/src/images/2fa.png');
	background-size: contain;
`

type TypeContent = {
	[index: string]: JSX.Element,
	Init : JSX.Element,
	Loading : JSX.Element,
  }

const TFA = () => {
	const [authState, setAuthState] = useState("Init");
	const location = useLocation();
	const idx = location.search.indexOf("?id=");
	if (idx !== -1) {
		const tfaID = location.search.slice(4);
		localStorage.setItem("tfaID", tfaID);
	}
	const content : TypeContent = {
		Init : <TFAInputForm setAuthState={setAuthState}/>,
		Loading : <div>Loading</div>,
	};

  return (
	<Container>
		<h1>2단계 보안인증</h1>
		<h1>{authState}</h1>
		<ImgWrapper>
		</ImgWrapper>
		{content[authState]}
	</Container>
  )
}

export default TFA
