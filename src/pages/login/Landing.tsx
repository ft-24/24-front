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
  min-width: 375px;
`;

const Button = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 0.5em;
  font-size: 2em;
  border-radius: 0.5em;
  background: var(--yellow);
  color:var(--dark-gray);
  margin: 1em;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 1100px) {
    position: static;
    margin-top: 2em;
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
