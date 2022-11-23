import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import TFAInputForm from "./TFAInputForm";

const Container = styled.div`
  width: 25rem;
  height: 35rem;
  background: var(--white);
  color: var(--dark-gray);
  border-radius: 2rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  & > h1 {
    display: inline-block;
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

const ImgWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  background-image: url("/src/images/2fa.png");
  background-size: contain;
`;

type TypeContent = {
  [index: string]: JSX.Element;
  Init: JSX.Element;
  Loading: JSX.Element;
};

const TFA = () => {
  const [authState, setAuthState] = useState("Init");
  const [isAuthFail, setIsAuthFail] = useState(false);
  const [userInput, setUserInput] = useState("");
  const id = useRef("");
  const location = useLocation();

  useEffect(()=>{
    id.current = location.search.slice(4);
    localStorage.setItem("id", id.current);
  }, [])

  const content: TypeContent = {
    Init: (
      <TFAInputForm setAuthState={setAuthState} setUserInput={setUserInput} />
    ),
    Loading: <div>Loading</div>,
  };

  useEffect(() => {
    if (userInput !== "") handleSubmmit();
  }, [userInput]);

  const handleSubmmit = async () => {
    localStorage.setItem("2facode", userInput);
    try {
      setAuthState("Loading");
      const response = await axios.post("http://localhost:3000/login/tfa", {
        id: id.current,
        code: userInput,
      });
      const { token, success } = await response.data;
      if (success) {
        return <Navigate to={`/auth?token=${token}`} replace={true} />
      }
      setAuthState("Init");
      setIsAuthFail(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>2단계 보안인증</h1>
      {isAuthFail ? <h1>인증코드가 틀렸습니다.</h1> : null}
      <ImgWrapper></ImgWrapper>
      {content[authState]}
    </Container>
  );
};

export default TFA;
