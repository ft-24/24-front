import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import SectionHeader from "../../../components/SectionHeader";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import PlayerInfo from "../../lobby/components/PlayerInfo";
import { UserProps } from "../../profile/UserProps"
import IconButton from "./IconButton";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-items: flex-start;
	align-items: center;
	border-left: 1px solid white;
	background: var(--dark-gray);
	font-family:NanumSquareL;
`

const ProfileSection = styled.div`
	width: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const IconSection = styled.div`
	background: var(--light-gray);
	border-radius: 1rem 1rem 0 0;
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

const dummyUserData: PlayerInfo = {
  intra_id: 'undefined',
  nickname: 'undefined',
  profile_url: '/src/images/hero.png',
  ladder_score: 1500,
	is_my_friend: false,
}

const UserInfo = ({setIsInfoOn, intra}: {setIsInfoOn: any, intra: string}) => {
  const [userData, setUserData] = useState<PlayerInfo>();
  const { token } = useAuthState();
  
  const getData = async() => {
    await axios.get(Url + 'user/profile/' + intra, {
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
      const data: PlayerInfo = response.data;
      console.log(data);
      setUserData(
        prev => prev = new PlayerInfo(
          data.intra_id,
          data.nickname,
          data.profile_url,
					data.ladder_score,
					data.is_my_friend,
				))
    }).catch(error => {
      console.error(intra + ' profile loading failed');
      setUserData(dummyUserData);
    });
  }

  useEffect(() => {
		console.log("info on");
    getData();
  }, [intra]);

	const onClickAdd = () => {
		console.log("onClickAdd");
	}

	const onClickPlay = () => {
		console.log("onClickPlay");
	}

	const onClickBlock = () => {
		console.log("onClickBlock");
	}

	return (
		<Container>
			<SectionHeader color='var(--purple)'>
				<div style={{cursor: "pointer"}} onClick={()=>setIsInfoOn(false)}>{"<<"}</div>
			</SectionHeader>
			<ProfileSection>
				<Avatar.img size="5" src={userData?.profile_url} />
				<br></br>
				<p>{userData ? userData.nickname : "undefined"}</p>
				<p>{intra}</p>
				<p>🎖️ {userData ? userData.ladder_score : "???"}</p>
			</ProfileSection>
			<IconSection>
				{
					userData?.is_my_friend ? 
						<IconButton onClickButton={onClickAdd} icon="❤️" text="친구추가" />
						: <IconButton onClickButton={onClickAdd} icon="♡" text="친구삭제" />
				}
				<IconButton onClickButton={onClickPlay} icon="🎮" text="게임" />
				<IconButton onClickButton={onClickBlock} icon="❌" text="차단" />
			</IconSection>
		</Container>
	)
}

export default UserInfo;
