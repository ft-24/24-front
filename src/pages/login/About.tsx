import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  &, & > *, & > ul,li, h1 {
    background: var(--white);
    color: black;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 2em;
  background: var(--white);
`;

const Section = styled.div`
  width:50%;
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
`;

const MemberSection = styled.div`
  width:50%;
  height:100%;
`

const TechStackSection = styled.div`
  width:50%;
  height:100%;
`;

const About = () => {
    return (
        <Wrapper>
            <Section>
              <TechStackSection>
                <h1>Stack</h1>
                <ul>
                  <li>reactJS</li>
                  <li>react-router-dom</li>
                  <li>styled-component</li>
                  <li>framer-motion</li>
                </ul>
              </TechStackSection>
              <MemberSection>
                <h1>FrontEnd</h1>
                <ul>
                    <li>seonhjeo</li>
                    <li>sunhkim</li>
                    <li>young-ch</li>
                </ul>
              </MemberSection>
            </Section>
            <Section>
              <TechStackSection>
              <h1>Stack</h1>
                <ul>
                  <li>nestJS</li>
                </ul>
              </TechStackSection>
              <MemberSection>
                <h1>BackEnd</h1>
                    <ul>
                        <li>chanhuil</li>
                        <li>yoahn</li>
                </ul>
              </MemberSection>
            </Section>
        </Wrapper>
    );
}

export default About;
