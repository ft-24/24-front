import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import InvitingWaitBall from "../../../components/InvitingWaitBall";
import SectionHeader from "../../../components/SectionHeader";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import PlayerInfo from "../../lobby/components/PlayerInfo";
import IconButton from "./IconButton";
import { SimpleUserInfo } from "./SimpleUserInfo";
import { useQueueState, useQueueDispatch } from "../../../context/QueueHooks";
import useSocket from "../../../context/useSocket";
import { useNavigate } from "react-router-dom";

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
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const IconContainer = styled.div`
	padding: 1rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`

type Props = {
	setIsInfoOn: any,
	userIntra: string,
	joinedUsers?: SimpleUserInfo[],
}

type SendGameRoomData = {
	name: string,
	access_modifier: string,
}

const UserInfo = ({setIsInfoOn, userIntra, joinedUsers}: Props) => {
  const [userData, setUserData] = useState<PlayerInfo>();
	const [myRole, setMyRole] = useState<string>("user");
	const [userRole, setUserRole] = useState<string>("user");
  const [matchingBall, setMatchingBall] = useState(false);

  const { token, intra } = useAuthState();
  const { socket } = useSocket();

  const queueDispatch = useQueueDispatch();
  const navigate = useNavigate();
  
  const matchingBallCancel = () => {
    setMatchingBall(false);
  }

  const getData = async() => {
    await axios.get(Url + 'user/profile/' + userIntra, {
      headers: {
        Authorization: "Bearer " + token
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
				));
			setRoleSection();
    }).catch(error => {
      console.error(userIntra + ' profile loading failed');
    });
  }

	const setRoleSection = () => {
		joinedUsers?.forEach(user => {
			if (user.intra_id === userIntra) {
				setUserRole(user.role);
			}
			if (user.intra_id === intra) {
				setMyRole(user.role);
			}
		});
		console.log("role: " + myRole + ", " + userRole);
	}

  useEffect(() => {
    getData();
  }, [userIntra]);

	const onClickAdd = () => {
		console.log("onClickAdd");
	}

	const onClickPlay = () => {
		const data: SendGameRoomData = {
		  name: '',
		  access_modifier: ''
		};
		if (socket && userData) {
		  console.log(userData.intra_id);
		  data.name = userData.intra_id;
		  data.access_modifier = "private";
		  socket.emit("make-room", data, (id: string)=>{
			queueDispatch({type: "ENTER", payload: id});
			socket.emit("join", {id:id});
			navigate('/game');
		  });
		}
	}

	const onClickBlock = () => {
		console.log("onClickBlock");
	}

	const onClickGrant = () => {
		console.log("onClickGrant");
	}

	const onClickMute = () => {
		console.log("onClickGrant");
	}

	const onClickBan = () => {
		console.log("onClickGrant");
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
				<p>{userIntra}</p>
				<p>🎖️ {userData ? userData.ladder_score : "???"}</p>
			</ProfileSection>
			<IconSection>
				<IconContainer>
					{userData?.is_my_friend ? 
						<IconButton onClickButton={onClickAdd} icon="❤️" text="친구추가" />
						: <IconButton onClickButton={onClickAdd} icon="♡" text="친구삭제" />
					}
					<IconButton onClickButton={onClickPlay} icon="🎮" text="게임" />
					<IconButton onClickButton={onClickBlock} icon="❌" text="차단" />
				</IconContainer>
				<IconContainer>
					{myRole === "owner" ?
						<>
							{userRole === "admin" ? 
								<IconButton onClickButton={onClickGrant} icon="🛠" text="관리자박탈" />
								: <IconButton onClickButton={onClickGrant} icon="🛠" text="관리자임명" />
							}
							<IconButton onClickButton={onClickMute} icon="💤" text="채팅금지" />
							<IconButton onClickButton={onClickBan} icon="🚫" text="강제퇴장" />
						</>
						: null
					}
					{myRole === "admin" && userRole === "user" ?
						<>
							<IconButton onClickButton={onClickMute} icon="💤" text="채팅금지" />
							<IconButton onClickButton={onClickBan} icon="🚫" text="강제퇴장" />
						</>
						: null
					}
				</IconContainer>
			</IconSection>
      {matchingBall &&
      	<InvitingWaitBall handler={matchingBallCancel}/>
      }
		</Container>
	)
}

export default UserInfo;
