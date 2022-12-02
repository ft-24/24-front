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

const UserIconButton = ({onClickButton, imgSrc, text, iconSize} : {onClickButton: any, imgSrc: string, text: string | undefined, iconSize: string}) => {
	return (
		<Wrapper>
			<Button onClick={onClickButton}>
				<Avatar.img size={iconSize} src={imgSrc} />
			</Button>
			<Text>{text}</Text>
		</Wrapper>
	);
}

export default UserIconButton;