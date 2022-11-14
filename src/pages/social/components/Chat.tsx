import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--dark-gray);
	overflow-x: hidden;
`

const ChatContainer = styled.div`
	width: 100%;
	flex: 9;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: var(--dark-gray);
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
	width: 100%;
`

const Input = styled.input`
	width: 100%;
	padding: 1rem;
	border-radius: 1.5rem;
	background: var(--white);
	color: var(--dark-gray);
`

const Chat = ({setIsInfoOn} : any) => {
	return (
		<Container>
			<SectionHeader title="other, me">
				<p onClick={()=>setIsInfoOn(true)}>:</p>
			</SectionHeader>
			<ChatContainer>
				<OtherChat>Other: hi!</OtherChat>
				<MyChat>Me: hi!</MyChat>
				<OtherChat>Other: hi!</OtherChat>
			</ChatContainer>
			<InputSection>
				<Input></Input>
			</InputSection>
		</Container>
	);
}

export default Chat;
