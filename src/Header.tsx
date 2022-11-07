import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadBar = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  height: 80px;
  line-height: 84px;
  background: var(--dark-gray);
  font-family: SBAggroM;
  font-size: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  width: 96%;
  height: 96%;
  margin: 0 auto;
`;

const Profile = styled.div`
  position: relative;
  width: 20%;
  text-align: left;
`;

const Logo = styled.div`
  position: relative;
  width: 60%;
  text-align: center;
`;

const Friends = styled.div`
  position: relative;
  width: 20%;
  text-align: right;
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
`

const Header = () => {
  return (
    <HeadBar>
      <Wrapper>
        <Profile>
          <StyledLink to="/profile">프로필</StyledLink>
        </Profile>
        <Logo>
          <StyledLink to="/main">로 고</StyledLink>
        </Logo>
        <Friends>
          <StyledLink to="/friends">친 구</StyledLink>
        </Friends>
      </Wrapper>
    </HeadBar>
  );
}

export default Header;