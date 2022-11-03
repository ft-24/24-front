import styled from 'styled-components';
import { motion } from 'framer-motion';

import Hero from './Hero';
import About from './About';

const Container = styled.div`
  font-family: SBAggroM;
`

const Landing = () => {
    return (
        <Container>
            <Hero/>
            <About/>
        </Container>
    )
};

export default Landing;