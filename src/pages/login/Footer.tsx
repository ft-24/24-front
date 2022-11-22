import styled from "styled-components";

const Wrapper = styled.div`
	margin: 3em;
`

const StyledA = styled.a`
	text-decoration: none;
`

const Footer = () => {
	return (
		<Wrapper>
			<StyledA href="#">Go to Top↑</StyledA>
		</Wrapper>
	);
}

export default Footer;
