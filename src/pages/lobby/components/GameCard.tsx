import styled from "styled-components"

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

const GameCard = ({toggleInfo, setTitle, title} : any) => {
  const onClick = () => {
    toggleInfo();
    setTitle(title ? title : "No Title");
  }
  return (
    <Wrapper onClick={()=>{onClick()}}>
      <Container>
      <Title>
        {title ? title : "No Title"}
      </Title>
      </Container>
    </Wrapper>
  )
}

export default GameCard;