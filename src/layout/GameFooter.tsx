import styled from 'styled-components';

const FootBar = styled.div`
  z-index: 8;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
  line-height: 60px;
  margin-top: auto;
  background: var(--dark-gray);
  font-family: SBAggroM;
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 1em;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Text = styled.span`
  position: relative;
  width: 60%;
  text-align: center;
  color: var(--light-gray);
`;

const GameFooter = () => {
  return (
    <FootBar>
      <Wrapper>
        <Text>42 ft_transcendence 팀 트센뽀개기</Text>
      </Wrapper>
    </FootBar>
  );
}

export default GameFooter;