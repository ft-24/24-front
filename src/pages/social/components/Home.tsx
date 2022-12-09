import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CreateChannel from "../../../components/modals/CreateChannel";
import SectionHeader from "../../../components/SectionHeader";
import SimpleCard from "../../../components/SimpleCard";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import ChannelCard from "./ChannelCard";
import { ChannelInfo } from "./ChannelInfo";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--dark-gray);
`

const NoticeSection = styled.div`
	flex: 1;
	display: flex;
	max-height: 5.5rem;
	justify-content: center;
	flex-direction: column;
	font-family: SBAggroM;
`

const ChannelSection = styled.div`
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

const ChannelContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1rem;
`

const EmptyText = styled.div`
	padding: 1rem;
`

const CreateButton = styled.button`
	z-index: 2;
	position: absolute;
  	right: 10px;
	bottom: 10px;
	border: none;
	border-radius: 10px;
	background-color: var(--yellow);
`

const ButtonText = styled.div`
	margin: 1rem;
	font-size: 1rem;
	color: black;
`

const Home = ({setIsCreateModalOn, setIsPasswordModalOn, setLocate, setType, setTarget} : any) => {
	const [list, setList] = useState<ChannelInfo[]>();

	const { token } = useAuthState();

	const getList = async() => {
		await axios.get(Url + 'channels', {
		headers: {
			Authorization:"Bearer " + token
		}
		}).then(response => {
			console.log(response.data);
			setList([...response.data.rooms]);
		}).catch(error => {
			console.error('Public List loading failed');
		});
	}

	useEffect(() => {
			getList();
	}, []);

	const onClickCreate = () => {
		setIsCreateModalOn(true);
	}

	return (
		<Container>
			<SectionHeader color='var(--purple)' title="welcome home!"/>
			<ContentHeader>공지사항</ContentHeader>
				<NoticeSection>
					<SimpleCard text="매너있는 채팅 부탁드립니다."/>
				</NoticeSection>
			<ContentHeader>공개채널</ContentHeader>
			<ChannelSection>
				<ChannelContainer>
				{
					list && (list.length > 0) ? list.map((item: ChannelInfo, index) => (
						<ChannelCard
							key={index}
							type={item.access_modifier}
							receiver={item.name}
							memberList={undefined}
							setLocate={setLocate}
							setType={setType}
							setTarget={setTarget}
							setIsPasswordModalOn={setIsPasswordModalOn}/>
					)) : <EmptyText>열려있는 채널이 없어요...</EmptyText>
				}
				</ChannelContainer>
			</ChannelSection>
			<CreateButton onClick={onClickCreate}>
				<ButtonText>새 채널 만들기</ButtonText>
			</CreateButton>
		</Container>
	);
}

export default Home;
