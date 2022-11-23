import TFA from "../components/TFA"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 0.5em;
  font-size: 2em;
  border-radius: 0.5em;
  background: var(--yellow);
  color: var(--dark-gray);
  margin: 1em;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const TFAPage = () => {
  return (
    <Wrapper>
      <Button href="http://localhost:3000/login/tfa"/>
      <TFA></TFA>
    </Wrapper>
  )
}

export default TFAPage