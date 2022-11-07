import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import Features from './Features'
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

const Login = () => {
    return (
        <Wrapper>
            <Header/>
            <Hero/>
            <Button href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-8da575687fd06cd856e002bd2352a348072433d4faec75f47bab2925ef6be4c2&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth&response_type=code">START</Button>
            <About/>
            <Features/>
            <Footer/>
        </Wrapper>
    )
};

export default Login;
