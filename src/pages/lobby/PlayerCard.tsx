import styled from "styled-components";

const MyCard = styled.div`
	position: relative;
	width: 200px;
	max-width: 30vw;
	max-height: 20vh;
	border-radius: 0.2rem;
	padding: 1rem;
	margin: 1rem;
	background-color: var(--purple);
	color: white;
`
const OpponentCard = styled.div`
	position: relative;
	width: 200px;
	max-width: 30vw;
	max-height: 20vh;
	border-radius: 0.2rem;
	padding: 1rem;
	margin: 1rem;
	background-color: var(--yellow);
	color: black;
`

const SpectatorCard = styled.div`
	position: relative;
	max-width: 40%;
	border-radius: 2rem;
	padding: 1rem 2rem;
	margin: 1rem 0.5rem;
	background-color: var(--white);
	color: black;
	align-self: flex-start;
`

const PlayerCard = (props: {type: string, intra: string}) => {
	const RenderCard = () => {
		if (props.type == "me") {
			return (
			<MyCard>{props.intra}</MyCard>
			);
		} else if (props.type == "opponent") {
			return (
			<OpponentCard>{props.intra}</OpponentCard>
			);
		} else if (props.type == "spectator") {
			return (
			<SpectatorCard>{props.intra}</SpectatorCard>
			);
		} 
	}

	return (
		<>
			{RenderCard()}
		</>
	)
}

export default PlayerCard;