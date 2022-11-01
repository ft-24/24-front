import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Side = ({user} : {user : any}) => {
	const [ready, setReady] = useState(false);
	const [front, setFront] = useState(true);

	const flip = keyframes`
		0% {
		  -webkit-transform: rotateY(-180deg);
				  transform: rotateY(-180deg);
		}
		100% {
		  -webkit-transform: rotateY(0deg);
				  transform: rotateY(0deg);
		}
	`;

	const StyledSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	border: 3px solid;
	border-radius: 8px;
	width: 45vw;
	height: 60vh;
	background-color: white;
	overflow: hidden;
	&:hover {
		translate : scale(1.1, 1.1);
	}
`;

const StyledButton = styled.button`
	position: absolute;
	top: 95%;
	padding: 6px 12px;
	border-radius: 8px;
	font-size: 1rem;
	border: 1px solid lightgray;
	color: white;
	background: #afc702;
	text-align: center;
	text-decoration: none;
	box-shadow: 0 9px #999;

	&:hover {
		background-color: #c8e300;
	}
	&:active {
		transform: translateY(4px);
	}

	${ready ? `transform: rotate(-35deg)` : ""}
`;

const Front = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	animation: ${flip} 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
`;

const Back = styled(Front)`
	font-size: 16px;
	justify-content: space-around;
	text-align: center;
`;

	return (
		<StyledSide>
			{front?
			<Front onClick={()=>{setFront(!front)}}>
				<h1>{user.id}</h1>
				<img margin-bottom='8px' width='200px' height='200px' src={user.profile}></img>
				<p>⭐{user.rating}</p>
			</Front>
			:
			<Back onClick={()=>{setFront(!front)}}>
				<p>{`total : ${user.total} / win : ${user.win} / lose : ${user.lose}`}</p>
				<p>{user.comment}</p>
			</Back>
			}
			<StyledButton onClick={()=>{
				setReady(!ready);}}>
					{ready ? `GO!` : `READY`}
			</StyledButton>
		</StyledSide>

	)

};

export default Side;
