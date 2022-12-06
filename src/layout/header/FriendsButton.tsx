import styled from "styled-components";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Friends = styled.button`
  width: 15vw;
  position: relative;
  border: none;
  text-align: end;
`;

const variants = {
  open: { opacity: 1, x: 10},
  closed: { opacity: 0, x: 20},
};

type Props = {
  toggle: boolean;
  setToggle: any;
};

const FriendSideBar = styled(motion.div)`
  position: relative;
`

const FriendsButton = ({ toggle, setToggle }: Props) => {
  return (
    <>
      <Friends onClick={() => setToggle(!toggle)}>친 구</Friends>
      <FriendSideBar animate={toggle ? "open" : "closed"} variants={variants}>
        {toggle ? <Sidebar /> : null}
      </FriendSideBar>
    </>
  );
};

export default FriendsButton;
