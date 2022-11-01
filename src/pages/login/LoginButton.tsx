import styled from 'styled-components'

const StyledButton = styled.a`
	padding: 6px 12px;
	border-radius: 8px;
	font-size: 1rem;
	border: 1px solid lightgray;
	color: gray;
	background: white;
	text-align: center;
	text-decoration: none;
	&:hover {
		transform: scale(1.1, 1.1);
	}
`;

function LoginButton() {
    return (
	<StyledButton href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-8da575687fd06cd856e002bd2352a348072433d4faec75f47bab2925ef6be4c2&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth&response_type=code">
		Login
	</StyledButton>
    )
};

export default LoginButton;
