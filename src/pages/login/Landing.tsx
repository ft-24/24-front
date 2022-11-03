import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import Feature from './Feature'
import Footer from './Footer';

const Wrapper = styled.div`
  font-family: SBAggroM;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const buttonShadow = css`
  text-shadow: 0.02em 0.02em var(--dark-gray), -0.02em -0.02em var(--dark-gray)
  , 0.02em -0.02em var(--dark-gray), -0.02em 0.02em var(--dark-gray),
  0.03em 0.03em var(--purple), -0.03em -0.03em var(--purple)
  , 0.03em -0.03em var(--purple), -0.03em 0.03em var(--purple);
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  ${buttonShadow}
  padding: 0.5em;
  font-size: 2em;
  background: var(--yellow);
  border-radius: 0.5em;
  margin: 1em;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 1100px) {
    position: static;
  }
`;

const Landing = () => {
    return (
        <Wrapper>
            <Header/>
            <Hero/>
            <Button>START</Button>
            <About/>
            <Feature/>
            <Footer/>
        </Wrapper>
    )
};

export default Landing;
