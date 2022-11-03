import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import img1 from "../../../public/images/hero.png";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 0;
  }
  `;

const SectionWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1100px) {
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
const titleShadow = css`
  text-shadow: 0.05em 0.1em var(--purple);
  `

const Title = styled.h1`
  width:100%;
  display: inline-block;
  text-transform: uppercase;
  text-align: right;
  ${titleShadow}
  font-size: 4em;
  font-weight: 700;
  margin: 0 0 0.5em 0;
  @media (max-width: 1100px) {
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

const buttonShadow = css`
  text-shadow: 0.02em 0.02em var(--dark-gray), -0.02em -0.02em var(--dark-gray)
  , 0.02em -0.02em var(--dark-gray), -0.02em 0.02em var(--dark-gray),
  0.03em 0.03em var(--purple), -0.03em -0.03em var(--purple)
  , 0.03em -0.03em var(--purple), -0.03em 0.03em var(--purple);
`

const Button = styled.a`
  position: absolute;
  left: 10%;
  bottom: 5%;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  ${buttonShadow}
  padding: 0.5em;
  font-size: 2em;
  background: var(--yellow);
  border-radius: 0.5em;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 720px) {
    position: static;
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
      </SectionWrapper>
      <Button>START</Button>
      <ImageWrapper>
        <img width="420px" height="420px" src={img1}></img>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Hero;
