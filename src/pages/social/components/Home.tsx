import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import ChannelCard from "./ChannelCard";
import { ChannelInfo } from "./ChannelInfo";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--dark-gray);
`

const NoticeSection = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	font-family: SBAggroM;
	margin-top: 1rem;
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
`

const Home = ({setLocate, setReceiver} : any) => {
	const [list, setList] = useState<ChannelInfo[]>();
	const { token } = useAuthState();

	const getList = async() => {
		await axios.get(Url + 'channels', {
		headers: {
			Authorization:"Bearer " + token
		}
		}).then(response => {
			setList(response.data);
		}).catch(error => {
			console.error('Public List loading failed');
		});
	}

	useEffect(() => {
			getList();
	}, []);

	return (
		<Container>
			<SectionHeader color='var(--purple)' title="welcome home!"/>
			<ContentHeader>공지사항</ContentHeader>
			<NoticeSection>
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
							setLocate={setLocate}
							setReceiver={setReceiver} />
					)) : "열려있는 채널이 없어요..."
				}
				</ChannelContainer>
			</ChannelSection>
		</Container>
	);
}

export default Home;
