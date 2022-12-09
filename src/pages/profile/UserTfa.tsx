import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Url } from "../../constants/Global";
import { useAuthState } from "../../context/AuthHooks";

const Wrapper = styled.div`
	display: flex;
`;

const Button = styled.button`
	padding: 0.5rem;
	font-size: 2rem;
	border: none;
  background: rgba(0, 0, 0, 0);
`;

const MessageWrapper = styled.div`
  position: relative;
  width: 20%;
`;

const Message = styled.div`
  padding: 0.8em;
  position: fixed;
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-family: NanumSquareL;
  background: var(--translucent-white);
`

const UserTfa = ({isTfaOn} : {isTfaOn : boolean}) => {
  const [tfa, setTfa] = useState(isTfaOn);
	const [hover, setHover] = useState(false);
  const { token } = useAuthState();

  useEffect(() => {
    setTfa(isTfaOn);
  }, [isTfaOn])

  const onClickTfa = async () => {
    await axios.put(Url + 'user/profile', {
        two_auth: !tfa
    }, {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then(response => {
      console.log("set tfa: " + response.status);
			setTfa(!tfa);
    }).catch(error => {
      console.error('two factor setting failed');
    });
  }

  return (
		<Wrapper>
    	<Button
				onClick={() => { onClickTfa() }}
				onMouseEnter={() => {setHover(true)}}
      	onMouseLeave={() => {setHover(false)}}>
				{tfa ? '🔒' : '🔓'}</Button>
			<MessageWrapper>
				{hover ? <Message>Two-factor Auth</Message> : null}
			</MessageWrapper>
		</Wrapper>
  )
}

export default UserTfa;