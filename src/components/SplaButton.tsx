import styled from "styled-components";

const Container = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
  background: var(--light-gray);
  position: relative;
  font-family: SBAggroM;
  &:hover {
    background-color: var(--dark-gray);
  }
`;

const Image = styled.img`
  position: absolute;
  background: none;
  width: 70px;
  height: auto;
`;

const FirstImage = styled(Image)`
  top: -5px;
  left: 0px;
`;

const LastImage = styled(Image)`
  top: 0px;
  left: 100px;
`;

const Text = styled.div`
  color: var(--white);
  font-size: 2rem;
  z-index: 2;
  background: none;
`;

const SplaButton = ({ text }: { text: string }) => {
  return (
    <Container>
      <FirstImage src="/src/images/splash1.png" alt="" />
      <LastImage src="/src/images/splash2.png" alt="" />
      <Text>{text}</Text>
    </Container>
  );
};

export default SplaButton;
