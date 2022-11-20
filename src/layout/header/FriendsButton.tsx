import styled from "styled-components";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";

const Friends = styled.button`
  position: relative;
  width: 20%;
  text-align: right;
  border: none;
`;

const variants = {
  open: { opacity: 1, x: 10, y: -11 },
  closed: { opacity: 0, x: 20, y: -11 },
};

type Props = {
  toggle: boolean;
  setToggle: any;
};

const FriendsButton = ({ toggle, setToggle }: Props) => {
  return (
    <>
      <Friends onClick={() => setToggle(!toggle)}>친 구</Friends>
      <motion.div animate={toggle ? "open" : "closed"} variants={variants}>
        {toggle ? <Sidebar /> : null}
      </motion.div>
    </>
  );
};

export default FriendsButton;
