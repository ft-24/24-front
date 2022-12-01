import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAuthDispatch } from "../../context/AuthHooks"

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

const Logout = styled.button`
  position: relative;
  width: 20%;
  text-align: left;
  border: none;
  color: var(--light-gray);
`;

const Text = styled.span`
  position: relative;
  width: 60%;
  text-align: center;
  color: var(--light-gray);
`;

const HelpWrapper = styled.div`
  position: relative;
  width: 20%;
`;

const Help = styled.button`
  width: 1em;
  float: right;
  border: none;
  color: var(--light-gray);
`;

const HelpMessage = styled.div`
  padding: 0.8em;
  position: fixed;
  right: 0;
  bottom: 60px;
  font-size: 0.8em;
  line-height: 1.2em;
  font-family: NanumSquareL;
  background: var(--translucent-white);
`

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const Footer = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useAuthDispatch();

  const onClickLogout = () => {
    dispatch({type:"LOGOUT"});
  }

  return (
    <FootBar>
      <Wrapper>
        <Logout onClick={onClickLogout}>Logout</Logout>
        <Text>42 ft_transcendence 팀 트센뽀개기</Text>
        <HelpWrapper>
          <Help
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            ?
          </Help>
        </HelpWrapper>
        <motion.nav
          animate={hover ? "open" : "closed"}
          variants={variants}
        >
        {hover ?
          <HelpMessage>
            Private: 친구와 단둘이 함께하는 비공개 매치<br/>
            Public: 다양한 유저들과 게임을 즐겨보세요<br/>
            Arcade: 점점 빨라지는 공으로 한계에 도전해보세요<br/>
            Ladder: 점수를 놓고 싸우는 랭크 매치<br/>
            Social: 사람들과 대화하는 장소<br/>
          </HelpMessage> : null}
        </motion.nav>
      </Wrapper>
    </FootBar>
  );
}

export default Footer;