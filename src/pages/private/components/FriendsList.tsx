import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import PlayerInfo from "../../lobby/components/PlayerInfo";
import FriendCard from "./FriendCard";


const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--dark-gray);
`

const FriendsSection = styled.div`
	flex: 5;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-x:hidden;
	overflow-y:scroll;
	&::-webkit-scrollbar{
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb{
		background-color: var(--yellow);
		border-radius: 10px;    
	}
	&::-webkit-scrollbar-track{
		background-color: rgba(0,0,0,0);
	}
`

const ContentHeader = styled.div`
	width: 100%;
	display: block;
	font-family: SBAggroM;
	font-size: 1.5rem;
	padding: 0.5rem;	
	background: var(--purple);
	text-shadow: 0 2px 0 black;
`

const FriendsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const EmptyText = styled.div`
	padding: 1rem;
`

const DummyFriends: PlayerInfo[] = [
	{
		intra_id: "yoahn",
		nickname: "yoahn",
		profile_url: "/src/images/hero.png",
		ladder_score: 1200,
		is_my_friend: true,
	},
	{
		intra_id: "seonhjeo",
		nickname: "HOYA",
		profile_url: "/src/images/hero.png",
		ladder_score: 1500,
		is_my_friend: true,
	},
]

const FriendsList = ({setIsInfoOn, setInfoIntra} : any) => {
  const [onlineFriends, setOnlineFriends] = useState<PlayerInfo[]>([]);
	const { token } = useAuthState();

  const getFriends = async () => {
		await axios.get(Url + 'user/friends', {
				headers: { 'token': 'bearer ' + token },
				timeout: 1000,
		}).then(response => {
			const Friends = response.data;
			const onlineArray : PlayerInfo[] = [];
			for (let friend of Friends) {
				onlineArray.push(friend);
			}
			setOnlineFriends([...onlineArray]);
		}).catch(error => {
			console.error('online friends loading failed');
			// const onlineArray : PlayerInfo[] = [];
			// for (let friend of DummyFriends) {
			// 	onlineArray.push(friend);
			// }
			// setOnlineFriends([...onlineArray]);
		});
	}

  useEffect(()=>{
    getFriends();
  }, []);

	return (
		<Container>
			<SectionHeader color='var(--purple)' title="Welcome to Pong Game World!"/>
			<ContentHeader>친구목록</ContentHeader>
			<FriendsSection>
				<FriendsContainer>
					{
						(onlineFriends.length > 0) ?
							onlineFriends.map((item : PlayerInfo, index) => (
									<FriendCard
										key={index}
										nickname={item.nickname}
										intra={item.intra_id}
										setIsInfoOn={setIsInfoOn} 
										setInfoIntra={setInfoIntra} />
							))
						: <EmptyText>아직 친구가 한명도 없어요ㅜㅜ</EmptyText>
					}
				</FriendsContainer>
			</FriendsSection>
		</Container>
	);
}

export default FriendsList;