import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQueueDispatch } from "../../context/QueueHooks";
import SplaButton from "../SplaButton";
import { BackDrop, ModalProps } from "./ModalUtils";

const Box = styled.div`
  width: 24rem;
  height: 16rem;
  padding: 3rem;
  background: var(--white);
  color: var(--dark-gray);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    background: transparent;
  }
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-family: NanumSquareL;
  margin-top: 1rem;
`;

const MatchingModal = ({ modalHandler }: ModalProps) => {
  const [count, setCount] = useState(10);
  const queueDispatch = useQueueDispatch();
  const navigator = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    if (count === -1) {
      console.log("count zero");
      modalHandler();
    }
  }, [count]);
  const buttonHandler = () => {
    navigator("/lobby");
    queueDispatch({ type: "INGAME" });
  };
  return (
    <BackDrop modalHandler={modalHandler}>
      <Box>
        <Title>게임을 찾았습니다!</Title>
        {count}
        <SplaButton text="GO!" onClickHandler={buttonHandler} />
      </Box>
    </BackDrop>
  );
};

export default MatchingModal;
