import styled from 'styled-components'
import LoginButton from "./LoginButton";

const LayOut = styled.div`
  display: flex;
  justify-items: column;
  justify-content: center;
  align-items: center;
`

const Aggro = styled.h1`
font-family: SBAggroM;
`

function Login() {

    return (
		<LayOut>
        <div>
          <h1>Welcome, 나눔 스퀘어 입니다ㅋㅋ</h1>
          <Aggro>어그로에요 ㅎㅎ</Aggro>
        </div>
        <LoginButton/>
		</LayOut>
    );
};

export default Login;
