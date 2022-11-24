import styled from "styled-components";

import Members from "./Members";
import Hero from "./Hero";
import Stacks from "./Stacks";
import Features from "./Features";
import Footer from "./Footer";
import { useRef } from "react";

const Wrapper = styled.div`
  overflow: hidden;
  font-family: SBAggroM;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--dark-gray);
  min-width: 375px;
`;

const Login = () => {
  const ref = useRef<any>(null);
  const onClickHandler = () => {
      ref?.current?.scrollIntoView({
        behavior: "smooth",
      });
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
