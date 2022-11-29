import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import TFAInputForm from "./TFAInputForm";
import Loader from "./Loader";
import { Url } from "../constants/Global";

const Container = styled.div`
  width: 25rem;
  height: 35rem;
  background: var(--white);
  color: var(--dark-gray);
  border-radius: 2rem;
  padding: 1.5rem;
  font-family: NanumSquareL;

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

const AuthFailMessage = styled(motion.div)`
  color: red;
  font-size: 1rem;
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
  Done: JSX.Element;
};

type AuthError = {
  [index: string]: string;
  none: string,
  code: string,
  etc: string,
}

const TFA = () => {
  const [authState, setAuthState] = useState("Init");
  const [token, setToken] = useState("");
  const [isAuthFail, setIsAuthFail] = useState("none");
  const [userInput, setUserInput] = useState("");
  const id = useRef("");
  const location = useLocation();

  useEffect(() => {
    id.current = location.search.slice(4);
  }, []);

  const content: TypeContent = {
    Init: (
      <TFAInputForm setAuthState={setAuthState} setUserInput={setUserInput} setIsAuthFail={setIsAuthFail} />
    ),
    Loading: <Loader title="Loading..."/>,
    Done: <Navigate to={`/auth?token=${token}`} replace={true} />,
  };

  const error: AuthError = {
    code: "인증코드가 틀렸습니다.",
    etc: "올바르지 않은 접근입니다.",
    none: "",
  }

  useEffect(() => {
    if (userInput !== "") handleSubmmit();
  }, [userInput]);

  const handleSubmmit = async () => {
    console.log("onsubmit");
    localStorage.setItem("2facode", userInput);
    try {
      setAuthState("Loading");
      const response = await axios.post(Url + "login/tfa", {
        id: id.current,
        code: userInput,
      });
      const { token, success } = await response.data;
      if (success) {
        setAuthState("Done");
        setToken(token.access_token);
      } else {
        setAuthState("Init");
        setIsAuthFail("code");
      }
    } catch (error) {
      console.log("Something went wrong!")
      setAuthState("Init");
      setIsAuthFail("etc");
  }
  };

  return (
    <Container>
      <h1>2단계 보안인증</h1>
      {isAuthFail !== "none" ? (
        <AuthFailMessage
          animate={{ y: [-10, 10, -5, 5, 0] }}
          transition={{ duration: 0.2, type: "Inertia" }}
        >
          {error[isAuthFail]}
        </AuthFailMessage>
      ) : null}
      <ImgWrapper></ImgWrapper>
      {content[authState]}
    </Container>
  );
};

export default TFA;
