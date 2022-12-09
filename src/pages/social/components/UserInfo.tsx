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
import { useQueueDispatch } from "../../../context/QueueHooks";
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
	font-family:SBAggroL;
`

const Nickname = styled.div`
	padding: 1rem 0 0.5rem;
	font-family:SBAggroM;
	font-size: 1.5rem;
`

const Intra = styled.div`
	padding-bottom: 0.5rem;
	color: var(--light-gray);
`

const LadderScore = styled.div`
	padding-bottom: 2rem;

`

const Button = styled.button`
  justify-content: center;
  align-items: center;
  display: inline-block;
  line-height: 2.2em;
  padding: 0 0.62em;
  color: var(--light-gray);
  border: none;
  border-radius: 0.25em;
  background-color: --black;
  box-shadow: inset 0 0 0.1em #fff, 0.2em 0.2em 0.2em rgba( 0, 0, 0, 0.3 );
  &:hover {
		color: var(--white);
  }
`;

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
	background-color: rgba(0, 0, 0, 0);
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
			console.log(response.data);
      setUserData(
        prev => prev = new PlayerInfo(
          response.data.intra_id,
          response.data.nickname,
          response.data.profile_url,
					response.data.stats.ladder_score,
					response.data.is_my_friend,
					response.data.is_blocked
				));
			setRoleSection();
    }).catch(error => {
      console.error(userIntra + ' profile loading failed');
    });
  }

	const setRoleSection = () => {
		if (joinedUsers) {
			joinedUsers.forEach(user => {
				if (user.intra_id === userIntra) {
					setUserRole(user.role);
				}
				if (user.intra_id === intra) {
					setMyRole(user.role);
				}
			});
		} else {
			setMyRole('user');
			setUserRole('user');
		}
	}

  useEffect(() => {
    getData();
  }, [userIntra]);

	const onClickProfile = () => {
		navigate('/profile/' + userIntra);
	}

	const onClickAdd = async () => {
		if (!userData) {
			return;
		}
    await axios.put(Url + 'user/friends', {
				intra_id: userIntra,
			},{
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
			getData();
    }).catch(error => {
      console.error('DM List loading failed');
    });
	}

	const onClickDelete = async () => {
		if (!userData) {
			return;
		}
    await axios.delete(Url + 'user/friends', {
      headers: {
        Authorization:"Bearer " + token
      },
			data: {
				intra_id: userIntra,
			}
    }).then(response => {
			getData();
    }).catch(error => {
      console.error('DM List loading failed');
    });
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

	const onClickBlock = async () => {
		if (!userData) {
			return;
		}
    await axios.put(Url + 'user/block', {
				intra_id: userIntra,
				is_blocked: userData.is_blocked,
			},{
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
			getData();
    }).catch(error => {
      console.error('DM List loading failed');
    });
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
				<Nickname>{userData ? userData.nickname : "undefined"}</Nickname>
				<Intra>{userIntra}</Intra>
				<LadderScore>🎖️ {userData ? userData.ladder_score : "???"}</LadderScore>
				<Button onClick={onClickProfile}>프로필 보기</Button>
			</ProfileSection>
			{userIntra === intra ? null :
				<IconSection>
					<IconContainer>
						{userData?.is_my_friend ? 
							<IconButton onClickButton={onClickDelete} icon="♡" text="친구삭제" />
							 : <IconButton onClickButton={onClickAdd} icon="❤️" text="친구추가" />
						}
						<IconButton onClickButton={onClickPlay} icon="🎮" text="게임" />
						{userData?.is_blocked ?
							<IconButton onClickButton={onClickBlock} icon="❌" text="차단해제" />
							:  <IconButton onClickButton={onClickBlock} icon="❌" text="차단" />
						}
					</IconContainer>
					<IconContainer>
						{myRole === "owner" ?
							<>
								{userRole === "admin" ? 
									<IconButton onClickButton={onClickGrant} icon="🛠" text="관리자박탈" />
									: <IconButton onClickButton={onClickGrant} icon="🛠" text="관리자임명" />
								}
								<IconButton onClickButton={onClickMute} icon="💤" text="채팅금지" />
								<IconButton onClickButton={onClickBan} icon="🚫" text="영구채금" />
							</>
							: null
						}
						{myRole === "admin" && userRole === "user" ?
							<>
								<IconButton onClickButton={onClickMute} icon="💤" text="채팅금지" />
								<IconButton onClickButton={onClickBan} icon="🚫" text="영구채금" />
							</>
							: null
						}
					</IconContainer>
				</IconSection>
			}
      {matchingBall &&
      	<InvitingWaitBall handler={matchingBallCancel}/>
      }
		</Container>
	);
}

export default UserInfo;
