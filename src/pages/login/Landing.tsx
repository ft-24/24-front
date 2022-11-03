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
  background: var(--dark-gray);
`
const buttonTextShadow = css`
  text-shadow: 0.02em 0.02em var(--dark-gray), -0.02em -0.02em var(--dark-gray)
  , 0.02em -0.02em var(--dark-gray), -0.02em 0.02em var(--dark-gray),
  0.03em 0.03em var(--purple), -0.03em -0.03em var(--purple)
  , 0.03em -0.03em var(--purple), -0.03em 0.03em var(--purple);
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  ${buttonTextShadow}
  padding: 0.5em;
  font-size: 2em;
  border-radius: 0.5em;
  border: 1px solid var(--white);
  margin: 1em;
  &:hover {
    transform: scale(1.1, 1.1);
    border: 1px solid var(--dark-gray);
    background:linear-gradient(
    100deg,
    var(--yellow),
    var(--purple)
  );
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
