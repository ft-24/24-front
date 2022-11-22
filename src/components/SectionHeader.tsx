import styled from "styled-components";

type dynamicColor = {
  color: string;
}

const Wrapper = styled.div<dynamicColor>`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: SBAggroM;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: ${props=>props.color};
  border-bottom: 1px solid var(--white);
  text-shadow: 0 2px 0 black;
`;

const Title = styled.div`
  position: relative;
  max-width: 50%;
`;

const Children = styled.div`
  display: flex;
  position: relative;
  right: 0;
  max-width: 50%;
`;

const SectionHeader = ({ children, title, color }: any) => {
  return (
    <Wrapper color={color}>
      <Title>{title}</Title>
      <Children>{children}</Children>
    </Wrapper>
  );
};

export default SectionHeader;
