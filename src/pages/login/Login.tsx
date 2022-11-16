import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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

const Login = () => {
    return (
        <Wrapper>
            <Hero/>
            <About/>
            <Features/>
            <Footer/>
        </Wrapper>
    )
};

export default Login;
