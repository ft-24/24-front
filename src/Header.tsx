import styled from 'styled-components';

const HeadBar = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  height: 50;
  background-color: #333333;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 96%;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <HeadBar>
      <Wrapper>
        <div>프로필</div>
        <div>로 고</div>
      </Wrapper>
    </HeadBar>
  );
}

export default Header;