import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";
import ChannelCard from "../../components/ChannelCard";

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

const GameList = ({setLocate, setTitle} : any) => {
	let toggle = false;
	return (
		<Container>
			<SectionHeader color='var(--purple)' title="Welcome to Pong Game World!"/>
			<ContentHeader>공지사항</ContentHeader>
			<NoticeSection>
			</NoticeSection>
			<ContentHeader>공개채널</ContentHeader>
			<ChannelSection>
				<ChannelContainer>
					<ChannelCard setLocate={setLocate} setTitle={setTitle} title="트센뽀개기"></ChannelCard>
				</ChannelContainer>
			</ChannelSection>
		</Container>
	);
}

export default GameList;