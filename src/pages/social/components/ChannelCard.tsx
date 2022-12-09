import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Avatar from "../../../components/Avatar"
import { useAuthState } from "../../../context/AuthHooks"

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem 0;
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

type Props = {
  type: string,
  receiver: string,
  memberList: any,
  setLocate: any,
  setType: any,
  setTarget: any,
  setIsPasswordModalOn?: any,
}

const ChannelCard = ({type, receiver, memberList, setLocate, setType, setTarget, setIsPasswordModalOn} : Props) => {
  const { nickname } = useAuthState();
  let navigate = useNavigate();

  const onClick = () => {
    setTarget(receiver);
    if (type === 'protected') {
      setIsPasswordModalOn(true);
    } else {
      setLocate("chat");
      setType(type);
      navigate('/social/' + receiver);
    }
  }
  
  return (
    <Wrapper onClick={onClick}>
      <Container>
        <Title>
          {type == "dm" ? (nickname + ", " + receiver) : receiver}
        </Title>
        <MemberList>
        {
          memberList?.map((url: string, index: number) => {
            <Avatar.img key={index} src={url} />
          })
        }
        </MemberList>
      </Container>
    </Wrapper>
  )
}

export default ChannelCard