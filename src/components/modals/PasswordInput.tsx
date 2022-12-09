import axios from "axios";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Url } from "../../constants/Global";
import { useAuthState } from "../../context/AuthHooks";
import useSocket from "../../context/useSocket";
import { BackDrop } from "./ModalUtils";

const Box = styled.div`
  position: relative;
  width: 24rem;
  padding: 1rem;
  background: var(--white);
  color: var(--dark-gray);
	border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  & > * {
      background: transparent;
  }
  gap: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-family: NanumSquareL;
  margin-top: 1rem;
`

const Column = styled.div`
  display: flex;
	justify-content: center;
`

const InputPassword = styled.input`
  border: 1px solid var(--light-light-gray);
  background-color: white;
  margin: 0.5rem 3rem;
  padding: 0.5rem 1rem;
  color: black;
`

const CreateButton = styled.button`
  margin: 1rem 0 1rem 0;
  width: 5rem;
	border: none;
	border-radius: 1rem;
	background-color: var(--purple);
`

const CancelButton = styled.button`
  margin: 1rem 1rem 1rem 0;
  width: 5rem;
	border: none;
	border-radius: 1rem;
	background-color: var(--light-light-gray);
`

const ButtonText = styled.div`
	margin: 1rem;
	font-size: 1rem;
	color: black;
`

const PasswordInput = ({modalHandler, title, moveToChat} : any) => {
  const [password, setPassword] = useState<string>("");
  const { token } = useAuthState();

  let navigate = useNavigate();

  const onChangePassword = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setPassword(event.currentTarget.value);
  }

	const onClickEnter = async() => {
    console.log(title, password);
    if (title && password) {
      await axios.post(Url + 'channels/pass', {
        name: title,
        pass: password,
      }, {
        headers: {
          Authorization:"Bearer " + token
        }
      }).then(response => {
        console.log("passward: " + response.data);
        if (response.data) {
          moveToChat();
          modalHandler();
          navigate('/social/' + title);
        } else {
          alert('Wrong Passward');
        }
      }).catch(error => {
        console.error('post password failed');
      });
    }
	}

  return (
    <BackDrop modalHandler={modalHandler}>
      <Box>
        <Wrapper>
          <Title>비밀번호를 입력하세요</Title>
          <InputPassword
            id="input_password"
            type="text"
            placeholder="passward"
            maxLength={16}
            onChange={onChangePassword} />
          <Column>
            <CancelButton onClick={modalHandler}>
              <ButtonText>취소</ButtonText>
            </CancelButton>
            <CreateButton onClick={onClickEnter}>
              <ButtonText>확인</ButtonText>
            </CreateButton>
          </Column>
        </Wrapper>
      </Box>
    </BackDrop>
  );
};

export default PasswordInput;
