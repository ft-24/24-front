import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-items: flex-start;
	align-items: center;
	padding: 1rem;
	background: var(--dark-gray);
`

const HeaderSection = styled.div`
	width: 100%;
	flex: 1 10%;
	display: flex;
	justify-content: space-between;
`

const ContentSection = styled.div`
	width: 100%;
	flex: 1 90%;
`

const NoticeContainer = styled.div`
	height: 30%;
	background: white;
	padding: 2rem;
	border-radius: 1rem;
	margin:2rem;

`

const ChannelContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const ChannelCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	background: white;
	color:black;
	padding: 2rem;
	border-radius: 1rem;
	margin:2rem;
	& > * {
		background: inherit;
		color:inherit;
	}
`

const Home = ({setIsInfoOn} : any) => {
	return (
		<Container>
			<HeaderSection>
				<h2>Welcome, Young il</h2>
				<p onClick={()=>setIsInfoOn(true)}>:</p>
			</HeaderSection>
			<ContentSection>
				<p>공지사항</p>
					<NoticeContainer></NoticeContainer>
				<ChannelContainer>
					<p>채널목록</p>
					<ChannelCard>
						<p>5</p>
						<h3>트센뽀개기</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
						<Avatar.txt background="light-gray" color="white">+3</Avatar.txt>
						</div>
					</ChannelCard>
					<ChannelCard>
						<p>3</p>
						<h3>프론트엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
						<Avatar.txt background="light-gray" color="white">+1</Avatar.txt>
						</div>
					</ChannelCard>
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
						</div>
					</ChannelCard>
				</ChannelContainer>
			</ContentSection>
		</Container>
	);
}

export default Home;
