import { useState } from "react";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import LogoButton from "./LogoButton";
import FriendsButton from "./FriendsButton";
import MatchingWaitBall from "../../components/MatchingWaitBall";

const HeadBar = styled.div`
  z-index: 8;
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background: var(--dark-gray);
  font-family: SBAggroM;
  font-size: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [matchingBall, setMatchingBall] = useState(true);

  const matchingBallCancel = () => {
    setMatchingBall(false);
  }
  
  return (
    <HeadBar>
      <div>
        <ProfileButton />
      </div>
      <div>
        <LogoButton />
      </div>
      <div>
        <FriendsButton toggle={toggle} setToggle={setToggle} />
      </div>
      {matchingBall &&
      <MatchingWaitBall handler={matchingBallCancel}/>
      }
    </HeadBar>
  );
};

export default Header;
