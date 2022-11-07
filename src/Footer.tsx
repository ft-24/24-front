import styled from 'styled-components';

const FootBar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50;
  width: 100%;
  margin-top: auto;
  background-color: #333333;
`;

const Wrapper = styled.div`
  display: flex;
  width: 96%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FootBar>
      <Wrapper>
        <div>어쩌구 저쩌구</div>
      </Wrapper>
    </FootBar>
  );
}

export default Footer;