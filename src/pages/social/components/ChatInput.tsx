import styled from "styled-components"
import { useRef } from "react"
import { useAuthState } from "../../../context/AuthHooks"

const Input = styled.input`
	flex: 9;
	padding: 1rem;
	background: var(--white);
	color: var(--dark-gray);
`

const Label = styled.label`
	flex: 1;
	display: flex;
	align-items:center;
	justify-content:center;
	padding: 1rem;
	background: var(--yellow);
	color: var(--dark-gray);
	border-radius: 8px;
`

const ChatInput = ({setUserMessage} : any) => {
    const ref = useRef<HTMLInputElement>(null);
		const state = useAuthState();

	const getTime = () => {
		let time = new Date();   
		let dateLine = time.toLocaleDateString("ko-KR");
		let timeLine = time.toLocaleTimeString("ko-KR");
		return (dateLine + ' ' + timeLine);
	}

	const sendUserInput = () => {
		const userInput = ref?.current?.value;
		if (ref?.current?.value) {
			ref.current.value = "";
			setUserMessage({nickname:state.nickname, intra_id:state.intra, time: getTime(), chat: userInput});
		}
	}

	const onClickHandler = (event : any) => {
		event.preventDefault();
		sendUserInput();
	}

	const onKeyPressHandler = (event: any) => {
		if(event.key === 'Enter') {
			const userInput = ref?.current?.value;
			sendUserInput();
		}
	}

	return (
		<>
			<Input ref={ref} type="text" id="message" placeholder="" onKeyPress={onKeyPressHandler}></Input>
			<Label htmlFor="message" onClick={onClickHandler}>SEND</Label>
		</>
  )
}

export default ChatInput