import axios from "axios"
import styled from "styled-components"
import { Url } from "../../../constants/Global"
import { useAuthState } from "../../../context/AuthHooks"
import { UserProps } from "../../profile/UserProps"

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem 0;
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

const FriendCard = ({nickname, intra, setIsInfoOn, setInfoIntra}: {nickname: string, intra: string, setIsInfoOn: any, setInfoIntra: any}) => {
  const onClick = () => {
		setInfoIntra(intra);
		setIsInfoOn(true);
	}
	
	return (
    <Wrapper onClick={onClick}>
      <Container>
				<Nickname>{nickname}</Nickname>
				<Intra>{intra}</Intra>
      </Container>
    </Wrapper>
  )
}

export default FriendCard;