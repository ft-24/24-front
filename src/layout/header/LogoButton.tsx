import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  position: relative;
  width: 60%;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const LogoButton = () => {
  return (
	<Logo>
	<StyledLink to="/home">로 고</StyledLink>
  </Logo>
)
}

export default LogoButton
