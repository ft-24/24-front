import styled from "styled-components";

import Members from "./Members";
import Hero from "./Hero";
import Stacks from "./Stacks";
import Features from "./Features";
import Footer from "./Footer";

const Wrapper = styled.div`
  font-family: SBAggroM;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--dark-gray);
  min-width: 375px;
`;

const Login = () => {
  return (
    <Wrapper>
      <Hero />
      <Members />
      <Stacks />
      <Features />
      <Footer />
    </Wrapper>
  );
};

export default Login;
