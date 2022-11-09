import styled from 'styled-components';

const FootBar = styled.div`
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
  width: 96%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Text = styled.span`
  color: var(--light-gray);
`;

const Footer = () => {
  return (
    <FootBar>
      <Wrapper>
        <Text>42 ft_transcendence 팀 트센뽀개기</Text>
      </Wrapper>
    </FootBar>
  );
}

export default Footer;