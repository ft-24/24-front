import axios from "axios"
import styled from "styled-components"
import { Url } from "../../../constants/Global"
import { useAuthState } from "../../../context/AuthHooks"
import { UserProps } from "../../profile/UserProps"

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`

const Container = styled.div`
  display: flex;
  background: var(--white);
  color: var(--dark-gray);
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
		border: solid 1px var(--light-gray);
  }
`

const Nickname = styled.div`
	font-size: 1.5rem;
`

const Intra = styled.div`
	font-size: 1.5rem;
`

const FriendCard = ({nickname, intra, setIsInfoOn}: {nickname: string, intra: string, setIsInfoOn: any}) => {
  return (
    <Wrapper onClick={() => setIsInfoOn(true)}>
      <Container>
				<Nickname>{nickname}</Nickname>
				<Intra>{intra}</Intra>
      </Container>
    </Wrapper>
  )
}

export default FriendCard;