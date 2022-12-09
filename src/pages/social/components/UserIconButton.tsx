import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Role = {
	role: string,
}

const Button = styled.button<Role>`
	background: none;
	padding: ${(props) => (props.role === 'user' ? '0' : '0.1rem')};
	border-radius: 50%;
	border: ${(props) => (props.role === 'user' ? 'none' : 'solid var(--purple)')};
`

const Text = styled.div`
	margin: 0.5rem;
	background:transparent;
`;

const UserIconButton = ({onClickButton, imgSrc, text, iconSize, role} : {onClickButton: any, imgSrc: string, text: string | undefined, iconSize: string, role: string}) => {
	return (
		<Wrapper>
			{role === 'owner' ? <div>👑</div> : null}
			<Button onClick={onClickButton} role={role}>
				<Avatar.img size={iconSize} src={imgSrc} />
			</Button>
			<Text>{text}</Text>
		</Wrapper>
	);
}

export default UserIconButton;