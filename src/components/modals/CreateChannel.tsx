import { useEffect, useState } from "react";
import styled from "styled-components";
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
  align-items:center;
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
`

const CreateChannel = ({modalHandler} : ModalProps) => {
	
	const onClickCreate = () => {

	}

  return (
    <BackDrop modalHandler={modalHandler}>
      <Box>
        <Title>새 채널 생성하가</Title>
        <button onClick={onClickCreate}>확인</button>
      </Box>
    </BackDrop>
  );
};

export default CreateChannel;
