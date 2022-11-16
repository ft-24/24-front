import styled from "styled-components"

type Props = {
    name : string,
}

const Wrapper = styled.div`
  color: var(--dark-gray);
  background:var(--white);
  width:70%;
  font-size: 2em;
  font-family:NanumSquareL;
  font-weight: bold;
  padding: 0.5em;
  @media (max-width: 1100px) {
    width: 100%;
  }
`

const Member = ({name} : Props) => {
    return (
        <Wrapper>
            {name}
        </Wrapper>
    );
};

export default Member;