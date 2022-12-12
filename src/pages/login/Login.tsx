import styled from "styled-components";

import Members from "./Members";
import Hero from "./Hero";
import Stacks from "./Stacks";
import Features from "./Features";
import Footer from "./Footer";
import { useRef } from "react";
import { useAuthDispatch } from "../../context/AuthHooks";

const Wrapper = styled.div`
  overflow: hidden;
  font-family: SBAggroM;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--dark-gray);
  min-width: 375px;
`;

const TestButton = styled.div`
  position: fixed;
  top: 10%;
  background: red;
  z-index: 100;
`

const Login = () => {
  const ref = useRef<any>(null);
  const onClickHandler = () => {
      ref?.current?.scrollIntoView({
        behavior: "smooth",
      });
  }

  const dispatch = useAuthDispatch();
  const testClick = () => {
    dispatch({type:"LOGIN", payload:"FAKE_TOKEN"})
  }

  return (
    <Wrapper>
      <Hero onClickHandler={onClickHandler}/>
      <Members ref={ref}/>
      <Stacks />
      <Features />
      <Footer />
    </Wrapper>
  );
};

export default Login;
