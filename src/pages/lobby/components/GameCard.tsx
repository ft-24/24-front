import styled from "styled-components"
import { useQueueDispatch } from "../../../context/QueueHooks"

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

const GameCard = ({toggleInfo, setTitle, info} : any) => {
  const dispatch = useQueueDispatch();
  const onClick = () => {
    toggleInfo();
    setTitle(info.name ? info.name : "No Title");
    dispatch({type: "UPDATE", payload: info});
  }

  return (
    <Wrapper onClick={()=>{onClick()}}>
      <Container>
      <Title>
        {info.name ? info.name : "No Title"}
      </Title>
      </Container>
    </Wrapper>
  )
}

export default GameCard;
