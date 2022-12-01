import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import UserIconButton from "./UserIconButton";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 1rem;
	border-right: 1px solid white;
	background: var(--purple);
`

const IconSection = styled.div`
	flex: 1 50%;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 4rem;
	align-items: center;
	& > * {
		font-size: 2rem;
	}
`

const Button = styled.div`
	margin: 1rem 0;
	&:hover {
		transform: scale(1.5);
	}
`

const Nav = ({isInfoOn, setLocate, setIsListOn, setIsInfoOn}: {isInfoOn: boolean, setLocate: any, setIsListOn: any, setIsInfoOn: any}) => {
  const [image, setimage] = useState("");
  const { token } = useAuthState();
	
  const getData = async() => {
    await axios.get(Url + 'user/profile', {
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
      setimage(response.data.profile_url);
    }).catch(error => {
      setimage('/src/images/hero.png');
    });
  }

	useEffect(() => {
		getData();
	}, []);
	
	return (
			<Container>
				LOGO
				<IconSection>
					<Button onClick={()=>{setLocate("home"); setIsListOn(false); setIsInfoOn(false);}}>🏠</Button>
					<Button onClick={()=>{setIsListOn(true);}}>👨‍👧‍👦</Button>
					<Button onClick={()=>{setIsListOn(true);}}>🤫</Button>
				</IconSection>
				<p>you</p>
				<UserIconButton onClickButton={() => setIsInfoOn(!isInfoOn)} imgSrc={image} text="" iconSize="3" />
			</Container>
	)
}

export default Nav;
