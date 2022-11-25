import { useEffect, useState } from "react";
import { UserProps } from "../../pages/profile/ProfileProps";
import styled from "styled-components";
import axios from "axios";
import ProfileButton from "./ProfileButton";
import LogoButton from "./LogoButton";
import FriendsButton from "./FriendsButton";

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

  return (
    <HeadBar>
      <div>
        <ProfileButton/>
      </div>
      <div>
        <LogoButton />
      </div>
      <div>
        <FriendsButton toggle={toggle} setToggle={setToggle} />
      </div>
    </HeadBar>
  );
};

export default Header;
