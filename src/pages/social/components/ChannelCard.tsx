import styled from "styled-components"
import Avatar from "../../../components/Avatar"

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  color: var(--dark-gray);
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
		border: solid 1px var(--light-gray);
  }
`

const Title = styled.div`
    font-size: 1.5rem;
`

const MemberList = styled.div`
    
`

const ChannelCard = ({setLocate} : any) => {
  return (
    <Wrapper onClick={()=>{setLocate("dm")}}>
      <Container>
      <Title>
        트센뽀개기방
      </Title>
      <MemberList>
        <Avatar.txt background="yellow">🤫</Avatar.txt>
      </MemberList>
      </Container>
    </Wrapper>
  )
}

export default ChannelCard