import styled from "styled-components";
import { Link } from "react-router-dom";

const Profile = styled.div`
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

type Props = {
	intra : string,
}

const ProfileButton = ({intra} : Props) => {
  return (
	<Profile>
		<StyledLink to="/profile">{intra ? intra : 'noname'}</StyledLink>
	</Profile>
	)
}

export default ProfileButton
