import { useEffect, useState } from "react";
import { UserProps } from "../pages/profile/UserProps";
import styled from "styled-components";
import axios from "axios";
import { Url } from "../constants/Global";

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
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
`

const GameHeader = () => {
  const [intra, setIntra] = useState("");

  const getData = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      console.log("getData() in Header Called");
      try {
        const response = await axios({
          url: Url + 'user/friends',
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
        <Logo>로고</Logo>
    </HeadBar>
  );
};

export default GameHeader;
