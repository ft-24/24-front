import styled from 'styled-components'
import LoginButton from "./LoginButton";

const LayOut = styled.div`
  display: flex;
  justify-items: column;
  justify-content: center;
  align-items: center;
`

function Login() {

    return (
		<LayOut>
        <div>
          <h1>Welcome</h1>
        </div>
        <LoginButton/>
		</LayOut>
    );
};

export default Login;
