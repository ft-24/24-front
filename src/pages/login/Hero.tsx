import styled from "styled-components";
import { motion } from "framer-motion";

import img1 from "../../../public/images/pngwing.com.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SBAggroM;
  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
  `;

const SectionWrapper = styled.div`
  width: 60%;
  padding: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 720px) {
      align-items: center;
      text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  width:100%;
  display: inline-block;
  text-transform: uppercase;
  text-align: right;
  font-size: 4em;
  font-weight: 700;
  margin: 0 0 0.5em 0;
  @media (max-width: 720px) {
      text-align: center;
  }
`;

const Article = styled.article`
  display: inline-block;
  font-size: 1.5em;
  width: 100%;
  text-align: right;
  margin-bottom: 1em;
  @media (max-width: 720px) {
      text-align: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 0.5em;
  font-size: 2em;
  border: 1px solid var(--white);
  border-radius: 0.5em;
  &:hover {
    transform: scale(1.1, 1.1);
    background-color: var(--yellow);
    border: 1px;
    color: black;
  }
`;


const Hero = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <Title>Hello</Title>
        <Article>
          Soon, you will realize that you already know things that you thought
          you didn't. No more C! No more C++! This project is about doing
          something you've never done before. Remind yourself the beginning of
          your journey in computer science. Look at you now. Time to shine! This
          project is about creating a website for the mighty Pong contest!
        </Article>
        <Button>START</Button>
      </SectionWrapper>
      <ImageWrapper>
        <img width="420px" height="auto" src={img1}></img>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Hero;
