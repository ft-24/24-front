import styled, { StyledInterface } from "styled-components"

type Props = {
    name : string,
}

const Wrapper = styled.div`
  color: var(--dark-gray);
  background:var(--white);
  width:70%;
  font-size: 2em;
  padding: 0.5em;
`

const Member = ({name} : Props) => {
    return (
        <Wrapper>
            {name}
        </Wrapper>
    );
};

export default Member;