import styled, { keyframes } from 'styled-components';
import axios from "axios";
import Side from "./Side"
import Versus from './Versus';
import { useState, useEffect } from 'react';

const Layout = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const curtain = keyframes`
	0% {
	  grid-gap: 100vw;
	}
	100% {
	  grid-gap: 0px;
	}
`

const Sides = styled.div`
  position: relative;
  animation: 0.7s ${curtain} cubic-bezier(.86,0,.07,1) 0.4s both;
  display: grid;
  grid-template-columns: 50vw 50vw;
  padding-left:5vw;
`;

const Matching = () => {
	const [playerMe, setPlayerMe] = useState({});
	const [playerOpp, setPlayerOpp] = useState({});
	const [isLoading, setIsLoding] = useState(true);
    useEffect(()=> {
        const getPlayerInfo = async () => {
            const resMe = await axios.get(`https://fir-test-bae60-default-rtdb.firebaseio.com/player/young-ch.json`);
            const dataMe = await resMe.data;
			const resOpp = await axios.get(`https://fir-test-bae60-default-rtdb.firebaseio.com/player/penguin.json`);
            const dataOpp = await resOpp.data;
            setPlayerMe(dataMe);
            setPlayerOpp(dataOpp);
            setIsLoding(false);
        }
        getPlayerInfo();
    }, []);

	return (
		<Layout>
			<Sides>
				<Side user={playerMe}/>
				<Versus state={isLoading}/>
				<Side user={playerOpp}/>
			</Sides>
		</Layout>
	);
}

export default Matching;
