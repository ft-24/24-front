import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Url } from "../../constants/Global";
import { useAuthState } from "../../context/AuthHooks";

const Wrapper = styled.div`
`
const UserTfa = ({isTfaOn} : {isTfaOn : boolean}) => {
  const [tfa, setTfa] = useState(true);
  const { token } = useAuthState();

  const onClickTfa = async () => {
    await axios.put(Url + 'user/profile/tfa', {
        two_auth: tfa
    }, {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then(response => {
      console.log("set tfa: " + response.status);
    }).catch(error => {
      alert('image upload failed');
    });
  }

  return (
		<Wrapper>
    	<button onClick={() => { onClickTfa() }}>tfa</button>
		</Wrapper>
  )
}

export default UserTfa;