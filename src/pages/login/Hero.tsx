import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import img1 from "../../../public/images/hero.png";

const Wrapper = styled.div`
  position: relative;
  margin-top: 130px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
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
  text-align: center;
  @media (max-width: 1100px) {
      align-items: center;
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
  ${titleShadow}
  font-size: 3em;
  font-weight: 700;
  margin: 0 0 0.3em 0;
  @media (max-width: 1100px) {
      display: none;
  }
`;

const SubTitle = styled.h1`
  width:100%;
  display: none;
  text-transform: uppercase;
  ${titleShadow}
  font-size: 3em;
  font-weight: 700;
  margin: 0 0 0.3em 0;
  @media (max-width: 1100px) {
      display: inline-block;
  }
`

const ArticleWrapper = styled.div`
  padding: 3em;
`

const Article = styled.article`
  display: inline-block;
  font-size: 1.5em;
  margin-bottom: 1em;
  width: 100%;
  `;

const Hero = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <Title>ft_transcendence</Title>
        <SubTitle>트뽀</SubTitle>
        <ArticleWrapper>
        <Article>
          Soon, you will realize that you already know things that you thought
          you didn't.
        </Article>
          <Article>
          No more C! No more C++! This project is about doing
          something you've never done before. Remind yourself the beginning of
          your journey in computer science. Look at you now. Time to shine!
        </Article>
        <Article>
          This project is about creating a website for the mighty Pong contest!
        </Article>
        </ArticleWrapper>
      </SectionWrapper>
      <ImageWrapper>
        <img width="420px" height="420px" src={img1}></img>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Hero;
