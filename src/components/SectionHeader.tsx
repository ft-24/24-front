import styled from "styled-components";

type dynamicColor = {
  color: string;
}

const Wrapper = styled.div<dynamicColor>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: SBAggroM;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: ${props=>props.color};
  border-bottom: 1px solid var(--white);
  color: ${
    props=>props.color == 'var(--purple)' ? "white" : "black"
  };
  text-shadow: ${
    props=>props.color == 'var(--purple)' ? "0 2px 0 black" : "0 2px 0 var(--purple)"
  };
`;

const SectionHeader = ({ children, title, color }: any) => {
  return (
    <Wrapper color={color}>
      {title}
      {children}
    </Wrapper>
  );
};

export default SectionHeader;
