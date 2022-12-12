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
import { AnimatePresence, motion } from "framer-motion";
import { add, NotificationProps, remove } from "../../../components/array-utils";

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
	position: relative;
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

const NotificationSection = styled.ul`
	position: absolute;
	align-content: flex-end;
	flex-direction: column;
	align-items: center;
	width: 100%;
	display: flex;
	bottom: 1rem;
	background-color: rgba(0, 0, 0, 0);
`

const Notification = styled(motion.li)`
	padding: 0 1rem;
  width: 300px;
  background: var(--light-gray);
  margin: 10px;
	height: 2rem;
	line-height: 2.2rem;
	justify-content: center;
	align-items: center;
  border-radius: 10px;
	list-style-type: none;
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
	background-color: rgba(0, 0, 0, 0);
	padding: 1rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`

const EmptyText = styled.div`
	padding: 1rem;
	color: var(--light-gray);
`

type Props = {
	setIsInfoOn: any,
	userIntra: string,
	roomName?: string,
	joinedUsers?: SimpleUserInfo[],
}

type SendGameRoomData = {
	name: string,
	access_modifier: string,
}

const UserInfo = ({setIsInfoOn, userIntra, roomName, joinedUsers}: Props) => {
  const [userData, setUserData] = useState<PlayerInfo>();
	const [myRole, setMyRole] = useState<string>("undefined");
	const [userRole, setUserRole] = useState<string>("undefined");
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const [matchingBall, setMatchingBall] = useState(false);
	let notiIndex = 0;

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
		}
	}

  useEffect(() => {
    getData();
  }, [userIntra, joinedUsers]);

	const showNotification = (item: NotificationProps) => {
		setNotifications(add(notifications, item))
		notiIndex++;
		item.index = notiIndex;
		setTimeout(() => {
			setNotifications(remove(notifications, item));
		}, 1000);
	}

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
			showNotification({index: 0, text: '해당 유저가 블락되었습니다.'});
			getData();
    }).catch(error => {
      console.error('DM List loading failed');
    });
	}

	const onClickAdmin = async () => {
		if (!userData || !socket) {
			console.log("There is no socket");
			return;
		}
		console.log("emit admin set: " + userIntra + ", cur role: " + userRole);
		socket.emit("admin", {
			intra_id: userIntra,
			room_name: roomName,
			is_admin: userRole === 'admin' ? true : false,
		}, (status: boolean)=>{
			if (status) {
				setUserRole('admin');
				showNotification({index: 0, text: '관리자 권한이 부여되었습니다.'});
			} else {
				setUserRole('user');
				showNotification({index: 0, text: '관리자 권한이 박탈되었습니다.'});
			}
		});
	}

	const onClickMute = async () => {
		if (!userData) {
			return;
		}
    await axios.put(Url + 'channels/mute', {
				intra_id: userIntra,
				room_name: roomName,
			},{
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
			showNotification({index: 0, text: '해당 유저가 뮤트되었습니다.'});
    }).catch(error => {
      console.error('DM List loading failed');
    });
	}

	const onClickBan = async () => {
		if (!userData) {
			return;
		}
    await axios.put(Url + 'channels/ban', {
				intra_id: userIntra,
				room_name: roomName,
			},{
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
			showNotification({index: 0, text: '해당 유저가 밴되었습니다.'});
    }).catch(error => {
      console.error('DM List loading failed');
    });
	}

	const onClickKick = async () => {
    if (socket && userData) {
      console.log("emit " + "kick " + userData.intra_id + " from " + roomName);
      socket.emit("kick", {name: roomName, intra_id: userData.intra_id});
    }
	}

	return (
		<Container>
			<SectionHeader color='var(--purple)'>
				<div style={{cursor: "pointer"}} onClick={()=>setIsInfoOn(false)}>{"<<"}</div>
			</SectionHeader>
			<ProfileSection>
				<NotificationSection>
					<AnimatePresence initial={false}>
						{notifications.map((item: NotificationProps, index) => (
							<Notification
								key={index}
								initial={{ opacity: 0, y: 50, scale: 0.3 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
							>
								{item.text}
							</Notification>
						))}
					</AnimatePresence>
				</NotificationSection>
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
					{ myRole !== "undefined" && userRole !== "undefined" ? 
						<IconContainer>
							{myRole === "owner" ?
								<>
									{userRole === "admin" ? 
										<IconButton onClickButton={onClickAdmin} icon="🛠" text="관리자박탈" />
										: <IconButton onClickButton={onClickAdmin} icon="🛠" text="관리자임명" />
									}
									<IconButton onClickButton={onClickMute} icon="💤" text="채팅금지" />
									<IconButton onClickButton={onClickBan} icon="🔇" text="영구채금" />
									<IconButton onClickButton={onClickKick} icon="🚫" text="강제추방" />
								</>
								: null
							}
							{myRole === "admin" && userRole === "user" ?
								<>
									<IconButton onClickButton={onClickMute} icon="💤" text="채팅금지" />
									<IconButton onClickButton={onClickBan} icon="🔇" text="영구채금" />
									<IconButton onClickButton={onClickKick} icon="🚫" text="강제추방" />
								</>
								: null
							}
						</IconContainer>
					: null }
				</IconSection>
			}
      {matchingBall &&
      	<InvitingWaitBall handler={matchingBallCancel}/>
      }
		</Container>
	);
}

export default UserInfo;
