import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthDispatch, useAuthState } from "../../context/AuthHooks";
import { Url } from "../../constants/Global";

const Profile = styled.div`
	width: 15vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ProfileButton = () => {
	const [nickname, setNickname] = useState("");
	const {token} = useAuthState();
  const dispatch = useAuthDispatch();
	const getName = async () => {
		try {
			const response = await axios.get(Url + 'user/profile', {
				headers: {
					Authorization:"Bearer " + token
				}
			})
			dispatch({type:"INTRA", payload: response.data.intra_id});
			dispatch({type:"NICKNAME", payload: response.data.nickname});
			setNickname(response.data.nickname);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(()=>{
		getName();
	}, [])

  return (
	<Profile>
		<StyledLink to="/profile">{nickname ? nickname : 'undefined'}</StyledLink>
	</Profile>
	)
}

export default ProfileButton
