import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "../../context/AuthHooks";

const Profile = styled.div`
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ProfileButton = () => {
	const [nickname, setNickname] = useState("");
	const {token} = useAuthState();
	const getName = async () => {
		try {
			const response = await axios.get("http://10.12.8.7:3000/user/me", {
				headers: {
					Authorization:"Bearer " + token
				}
			})
			const data = response.data.intra_id;
			setNickname(data);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(()=>{
		getName();
	}, [])

  return (
	<Profile>
		<StyledLink to="/profile">{nickname}</StyledLink>
	</Profile>
	)
}

export default ProfileButton
