import { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import { SimpleUserInfo } from "./SimpleUserInfo";
import { ChannelInfo } from "./ChannelInfo";
import UserIconButton from "./UserIconButton";
import axios from "axios";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import useSocket from "../../../context/useSocket";
import Radio from "../../../components/Radio";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start; 
	flex-direction: column;
	justify-items: flex-start;
	align-items: center;
	border-left: 1px solid white;
	background: var(--dark-gray);
	font-family:NanumSquareL;
`

const RoomInfoSection = styled.div`
	width: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
`

const Column = styled.div`
	display: flex;
	padding: 1rem;
`

const Label = styled.div`
	padding: 0 1rem;
`

const Text = styled.div`
	padding: 0 1rem;
`

const Button = styled.button`
  justify-content: center;
  align-items: center;
  display: inline-block;
  line-height: 2.2em;
	margin : 2rem;	
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

const EditSection = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 1rem;
	display: flex;
  align-items: center;
	flex-direction: column;	
	justify-content: flex-start;
	background: var(--light-gray);
`

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-family: NanumSquareL;
  margin: 2rem 0 1rem;
`

const InputPassword = styled.input`
  border: 1px solid var(--light-light-gray);
  background-color: white;
  margin: 0.5rem 3rem;
  padding: 0.5rem 1rem;
  color: black;
`

const CreateButton = styled.button`
  margin: 0.5rem 0;
  width: 5rem;
	border: none;
	border-radius: 1rem;
	background-color: var(--purple);
`

const CancelButton = styled.button`
  margin: 0.5rem 1rem 0.5rem 0;
  width: 5rem;
	border: none;
	border-radius: 1rem;
	background-color: var(--light-light-gray);
`

const ButtonText = styled.div`
	margin: 1rem;
	font-size: 1rem;
	color: white;
`

const IconSection = styled.div`
	background: var(--light-gray);
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	padding: 1rem;
`

type Props = {
	setIsInfoOn: any,
	setInfoIntra: any,
	joinedUsers: SimpleUserInfo[],
	roomName: string,
}

const RoomInfo = ({setIsInfoOn, setInfoIntra, joinedUsers, roomName}: Props) => {
	const [channelInfo, setChannelinfo] = useState<ChannelInfo>();
  const [password, setPassword] = useState<string>("");
  const [select, setSelect] = useState(1);
	const [myRole, setMyRole] = useState<string>("user");
	const [isOnEdit, setIsOnEdit] = useState<boolean>(false);
	
  const { intra, token } = useAuthState();
  const { socket } = useSocket();
	
	const getChannelInfo = async () => {
    await axios.get(Url + 'channels/joined/' + roomName, {
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
			if (response.data) {
				setChannelinfo({
					id: response.data.id,
					name: response.data.name,
					access_modifier: response.data.access_modifier,
				})
				switch(response.data.access_modifier) {
					case "public":
						setSelect(1);
						break;
					case "protected":
						setSelect(2);
						break;
					case "private":
						setSelect(3);
						break;
				}
			}
    }).catch(error => {
      console.error(roomName + ' room infomation loading failed');
    });
	}

	const setRoleSection = () => {
		if (joinedUsers) {
			joinedUsers.forEach(user => {
				if (user.intra_id === intra) {
					setMyRole(user.role);
				}
			});
		} else {
			setMyRole('user');
		}
	}

  const onChangePassword = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setPassword(event.currentTarget.value);
  }

	const onClickCreate = () => {
    if (socket) {
      let access = "";
      switch(select) {
        case 1:
          access = "public";
          setPassword("");
          break;
        case 2:
          access = "protected";
          break;
        case 3:
          access = "private";
          setPassword("");
          break;
      }
			console.log("emit edit-room");
			socket.emit('edit-room', {
				name: channelInfo? channelInfo.name : "undefined",
				password:password,
				access_modifier:access
			}, (result: string) => {
				if (result == "") {
					console.log("changed!");
					getChannelInfo();
					setIsOnEdit(false);
				} else {
					alert(result);
				}
			});
    }
	}

	useEffect(() => {
		setRoleSection();
		getChannelInfo();
	}, [])

	useEffect(() => {
		setRoleSection();
	}, [joinedUsers]);

	const onClick = ({intra}: {intra: string}) => {
		setInfoIntra(intra);
	}
	return (
		<Container>
			<SectionHeader color='var(--purple)' title='채팅방 정보'>
				<div onClick={()=>setIsInfoOn(false)}>X</div>
			</SectionHeader>
			<RoomInfoSection>
				<Column>
					<Label>채널 이름: </Label><Text>{channelInfo? channelInfo.name : "undefined"}</Text>
				</Column>
				<Column>
					<Label>공개 설정: </Label><Text>{channelInfo? channelInfo.access_modifier : "undefined"}</Text>
				</Column>
				{myRole === "owner" && isOnEdit === false ? <Button onClick={() => setIsOnEdit(true)}>채널 정보 수정</Button>
				: null}
				{isOnEdit ? <EditSection>
          <Title>채널 정보 수정하기</Title>
          <Column>
            <Radio label="Public" color="white" index={1} select={select} handler={setSelect} />
            <Radio label="Protected" color="white" index={2} select={select} handler={setSelect} />
            <Radio label="Private" color="white" index={3} select={select} handler={setSelect} />
          </Column>
          {select === 2 ? <InputPassword
                            id="input_password"
                            type="text"
                            placeholder="passward"
                            maxLength={16}
                            onChange={onChangePassword} /> : null }
          <Column>
            <CancelButton onClick={() => setIsOnEdit(false)}>
              <ButtonText>취소</ButtonText>
            </CancelButton>
            <CreateButton onClick={onClickCreate}>
              <ButtonText>확인</ButtonText>
            </CreateButton>
          </Column>
				</EditSection> : null}
			</RoomInfoSection>
			<SectionHeader color='var(--purple)' title='참여중인 사람들' />
			<IconSection>
				{
					joinedUsers && (joinedUsers.length > 0) ? joinedUsers.map((item: SimpleUserInfo, index) => (
						<UserIconButton
							key={index}
							onClickButton={onClick}
							imgSrc={item.profiles_url}
							text={item.nickname ?? "undefined"}
							iconSize="2.5"
							role={item.role} />
					)) : null
				}
			</IconSection>
		</Container>
	)
}

export default RoomInfo;
