import { motion } from "framer-motion";
import styled from "styled-components";
import Loader from "./Loader";

const Wrapper = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20vh;
  left: calc(50% - 100px);
  border-radius: 50%;
  background: var(--white);
  color: var(--dark-gray);
  box-shadow: 5px 5px 10px var(--dark-gray);
`;

const Xbutton = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  top: 0;
  left: 75%;
  font-size: 1rem;
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

const MatchingWaitBall = ({ handler }: { handler: VoidFunction }) => {
  return (
    <Wrapper
      drag
      dragConstraints={{ left: -500, right: 500, top: -100, bottom: 600 }}
      dragElastic={0.2}
    >
      <Loader title="매칭중..." />
      <Xbutton onClick={handler}>X</Xbutton>
    </Wrapper>
  );
};

export default MatchingWaitBall;
