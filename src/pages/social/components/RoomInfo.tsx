import { useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import { SimpleUserInfo } from "./SimpleUserInfo";
import UserIconButton from "./UserIconButton";

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

const Label = styled.div`

`

const Text = styled.div`

`

const IconSection = styled.div`
	background: var(--light-gray);
	width: 100%;
	flex: 1;
	display: flex;
`

type Props = {
	setIsInfoOn: any,
	setInfoIntra: any,
	joinedUsers: SimpleUserInfo[],
	roomName: string,
}

const RoomInfo = ({setIsInfoOn, setInfoIntra, joinedUsers, roomName}: Props) => {
	useEffect(() => {
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
				<Label>방 이름: </Label><Text>{roomName}</Text>
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
