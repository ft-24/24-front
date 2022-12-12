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

type Props = {
	onClickButton: any,
	imgSrc: string,
	text?: string | undefined,
	iconSize: string,
	role?: string
}

const UserIconButton = ({onClickButton, imgSrc, text, iconSize, role} : Props) => {
	return (
		<Wrapper>
			{role === 'owner' ? <div>👑</div> : null}
			<Button onClick={onClickButton} role={role ?? 'user'}>
				<Avatar.img size={iconSize} src={imgSrc} />
			</Button>
			{text ? <Text>{text}</Text> : null}
		</Wrapper>
	);
}

export default UserIconButton;