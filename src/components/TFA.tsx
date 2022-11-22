import styled from "styled-components"
import { useState, useEffect } from "react";
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
	Done : JSX.Element,
  }

const TFA = ({modalHandler} : any) => {
	const [authState, setAuthState] = useState("Init");

	const content : TypeContent = {
		Init : <TFAInputForm setAuthState={setAuthState}/>,
		Loading : <div>Loading</div>,
		Done : <button onClick={()=>{modalHandler(false)}}>done</button>,
	};

	useEffect(()=>{
		if (authState == "Loading") {
			// fake auth
			setTimeout(()=>{setAuthState("Done")},5000);
		}
	}, [authState])

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
