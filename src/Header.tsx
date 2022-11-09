import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';

const HeadBar = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  height: 60px;
  line-height: 44px;
  background: var(--dark-gray);
  font-family: SBAggroM;
  font-size: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  padding: 10px;
  width: 100%;
  height: 100%;
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

const Friends = styled.button`
  position: relative;
  width: 20%;
  text-align: right;
  border: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
`

const variants = {
  open: { opacity: 1, x:10, y:-10 },
  closed: { opacity: 0, x:20, y:-10 },
}

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <HeadBar>
      <Wrapper>
        <Profile>
          <StyledLink to="/profile">프로필</StyledLink>
        </Profile>
        <Logo>
          <StyledLink to="/main">로 고</StyledLink>
        </Logo>
        <Friends onClick={() => setToggle(!toggle)}>친 구</Friends>
        <motion.nav
          animate={toggle ? "open" : "closed"}
          variants={variants}
        >
        { toggle ? <Sidebar /> : null }
        </motion.nav>
      </Wrapper>
    </HeadBar>
  );
}

export default Header;