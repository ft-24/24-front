import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
	background: none;
	border: none;
`

const Text = styled.div`
	margin: 0.5rem;
`;

const IconButton = ({onClickButton, icon, text} : {onClickButton: any, icon: string, text: string}) => {
	return (
		<Wrapper>
			<Button onClick={onClickButton}>
				<Avatar.txt size="3">{icon}</Avatar.txt>
			</Button>
			<Text>{text}</Text>
		</Wrapper>
	);
}

export default IconButton;