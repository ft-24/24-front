import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  margin: 2em 2em;
  width: 80%;
  background: var(--white);
  color: black;
  display: flex;
  padding: 1em;
  border-radius: 2em;
  background: var(--white);
`;

const Section = styled.div`
  display: flex;
  width:50%;
  font-size: 1em;
`;

const MemberSection = styled.div`
  width:50%;
  padding: 1em;
`

const TechStackSection = styled.div`
  width:50%;
  padding: 1em;
`;

const About = () => {
    return (
        <Wrapper>
            <Section>
              <TechStackSection>
                <div>
                <h1>Stack</h1>
                </div>
                <div>
                <ul>
                  <li>reactJS</li>
                  <li>react-router-dom</li>
                  <li>styled-component</li>
                  <li>framer-motion</li>
                  <li>docker</li>
                </ul>
                </div>
              </TechStackSection>
              <MemberSection>
                <div>
                <h1>FrontEnd</h1>
                </div>
                <div>
                <ul>
                    <li>seonhjeo</li>
                    <li>sunhkim</li>
                    <li>young-ch</li>
                </ul>
                </div>
              </MemberSection>
            </Section>
            <Section>
              <TechStackSection>
                <div>
                <h1>Stack</h1>
                </div>
                <div>
                <ul>
                  <li>nestJS</li>
                  <li>PostgreSQL</li>
                  <li>docker</li>
                </ul>
                </div>
              </TechStackSection>
              <MemberSection>
                <div>
                <h1>BackEnd</h1>
                </div>
                <div>
                    <ul>
                        <li>chanhuil</li>
                        <li>yoahn</li>
                </ul>
                </div>
              </MemberSection>
            </Section>
        </Wrapper>
    );
}

export default About;
