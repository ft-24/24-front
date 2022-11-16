import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	padding: 6px 12px;
	border-radius: 8px;
	font-size: 1rem;
	line-height: 1.5;
	border: 1px solid lightgray;
	color: gray;
	background: white;
	text-align: center;
	text-decoration: none;
	&:hover {
		transform: scale(1.1, 1.1);
	}
`;

function MatchingButton() {
    return (
		<StyledLink to="/matching">Matching</StyledLink>
    )
};

export default MatchingButton;
