import styled from "styled-components";
import Avatar from "../../../components/Avatar";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background: var(--dark-gray);
`

const HeaderSection = styled.div`
	width: 100%;
	flex: 0;
	display: flex;
	justify-content: space-between;
	font-family: SBAggroM;
`

const NoticeSection = styled.div`
	flex: 3;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	font-family: SBAggroM;
	margin-top: 1rem;
`

const NoticeCard = styled.div`
	padding: 2rem;
	margin: 2rem;
	border-radius: 1rem;
	background: white;
	color: var(--dark-gray);
`

const ContentSection = styled.div`
	flex: 5;
	display: flex;
	flex-direction: column;
	height: 100%;
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

const ContentHeader = styled.h1`
	flex: 0;
	display: block;
	font-family: SBAggroM;
`

const ChannelContainer = styled.div`
	flex: 4;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

`

const ChannelCard = styled.div`
	flex: 15rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	background: white;
	color:black;
	padding: 2rem;
	margin: 1rem;
	border-radius: 1rem;
	& > * {
		background: inherit;
		color:inherit;
	}
`

const Home = ({setIsInfoOn} : any) => {
	return (
		<Container>
			<HeaderSection>
				<h1>Welcome, Young il</h1>
				<p onClick={()=>setIsInfoOn(true)}>:</p>
			</HeaderSection>
			<NoticeSection>
				<ContentHeader>공지사항</ContentHeader>
					<NoticeCard>
						!안녕하세요!안녕하세요!안녕하세요!안녕하세요!안녕하세요!
					</NoticeCard>
			</NoticeSection>
			<ContentSection>
				<ContentHeader>공개채널</ContentHeader>
				<ChannelContainer>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
					<ChannelCard>
						<p>2</p>
						<h3>백엔드</h3>
						<div>
						<Avatar.txt background="purple">😊</Avatar.txt>
						<Avatar.txt background="yellow">🤫</Avatar.txt>
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
