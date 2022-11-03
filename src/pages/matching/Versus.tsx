import styled, { css, keyframes } from 'styled-components';

const Versus = ({ state } : {state : Boolean}) => {
	const rotate = keyframes`
		0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
	`;

const animation = () => css`${rotate} 1s infinite`;

	const StyledVersus = styled.div`
	position: absolute;
	width: 8vw;
	height: 8vw;
	background: #ffffff;
	border-radius: 50%;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	margin: auto;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3.4vw;
	color: black;
	border-width: 10px;
	border-style: solid;
	border-color: #f3de49 #0586c3 #a2ce44 #dd142a ;
	transform: rotate(-45deg);
	> span {
		transform: rotate(35deg);
	}
	animation : ${state ? animation : ""};
`;

	return (
		<StyledVersus>
			<span>VS</span>
		</StyledVersus>
	);
};

export default Versus;
