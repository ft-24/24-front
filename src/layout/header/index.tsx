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
  const [intra, setIntra] = useState("");

  const getData = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      console.log("getData() in Header Called");
      try {
        const response = await axios({
          url: "http://user/friends",
          method: "get",
          headers: { token: "bearer " + token },
        });
        const data: UserProps = await response.data;
      } catch (error) {
        console.error("get frends List failed");
      }
    }
  };

  useEffect(() => {
    if (intra == "") {
      let tmp = localStorage.getItem("intra");
      if (tmp) setIntra(tmp);
    }
    if (intra == "") {
      getData();
    }
  }, []);

  return (
    <HeadBar>
      <div>
        <ProfileButton intra={intra} />
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
