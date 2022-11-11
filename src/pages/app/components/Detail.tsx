import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
    padding: 1rem;
	border-right: 1px solid white;
	background: var(--dark-gray);
`

const HeaderSection = styled.div`
	width: 100%;
	flex: 0;
	display: flex;
	justify-content: space-between;
	font-family: SBAggroM;
`

const ChannelSection = styled.div`
    flex: 8;
    display: flex;
    flex-direction: column;
`

const ChannelCard = styled.div`
	padding: 2rem;
	margin: 1rem;
	border-radius: 1rem;
	background: white;
	color: var(--dark-gray);
`

const Detail = ({setIsDetailOn} : any) => {
    return (
        <Container>
            <HeaderSection>
                <div>채널목록</div>
                <div onClick={()=>setIsDetailOn(false)}>{"X"}</div>
            </HeaderSection>
            <ChannelSection>
                <ChannelCard>
                    트센뽀개기
                </ChannelCard>
                <ChannelCard>
                    프론트엔드
                </ChannelCard>
            </ChannelSection>
        </Container>
    )
};

export default Detail