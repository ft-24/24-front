import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background: var(--dark-gray);
	overflow-x: hidden;
`

const HeaderSection = styled.div`
	width: 100%;
	flex: 1 10%;
	display: flex;
	justify-content: space-between;
	& > * {
		background: inherit;
	}
`

const ChatContainer = styled.div`
	width: 100%;
	flex: 1 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: var(--dark-gray);
	margin-bottom:2.5em;
`

const OtherChat = styled.div`
	max-width: 70%;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
	background: white;
	color: black;
	align-self: flex-start;
`

const MyChat = styled.div`
	max-width: 70%;
	border-radius: 2rem;
	padding: 1rem;
	margin: 1rem;
	background: var(--purple);
	color: black;
	align-self: flex-end;
	text-align: right;
`

const InputSection = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	display:flex;
	bottom: 0;
`

const Input = styled.input`
	width: 90%;
	border-radius: 1.5rem;
	background: var(--white);
	color: var(--dark-gray);
`

const Chat = ({setIsInfoOn} : any) => {
	return (
		<Container>
			<HeaderSection>
				<h2>Other, Me</h2>
				<p onClick={()=>setIsInfoOn(true)}>:</p>
			</HeaderSection>
			<ChatContainer>
				<OtherChat>Other: hi!</OtherChat>
				<MyChat>Me: hi!</MyChat>
				<OtherChat>Other: hi!</OtherChat>
			</ChatContainer>
			<InputSection>
				<Input></Input>
				<Button.button>{">"}</Button.button>
			</InputSection>
		</Container>
	);
}

export default Chat;
