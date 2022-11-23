import TFA from "../components/TFA"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TFAPage = () => {
  return (
    <Wrapper>
      <TFA/>
    </Wrapper>
  )
}

export default TFAPage