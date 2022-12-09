import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import PlayerInfo from "../../lobby/components/PlayerInfo";
import IconButton from "./IconButton";
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

const ProfileSection = styled.div`
	width: 100%;
	flex: 2;
	display: flex;
	flex-direction: column;
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
	const onClick = ({intra}: {intra: string}) => {
		setInfoIntra(intra);
	}

	return (
		<Container>
			<SectionHeader color='var(--purple)'>
				<div onClick={()=>setIsInfoOn(false)}>X</div>
			</SectionHeader>
			<ProfileSection>
			</ProfileSection>
			<SectionHeader color='var(--purple)' title='참여중인 사람들' />
			<IconSection>
				{
					joinedUsers && (joinedUsers.length > 0) ? joinedUsers.map((item: SimpleUserInfo, index) => (
						<UserIconButton 
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
