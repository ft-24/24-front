import { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import SplaButton from "../SplaButton";
import { BackDrop, ModalProps } from "./ModalUtils";

const Box = styled.div`
  position: relative;
  width: 24rem;
  padding: 1rem;
  background: var(--white);
  color: var(--dark-gray);
	border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  & > * {
      background: transparent;
  }
  gap: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-family: NanumSquareL;
  margin-top: 1rem;
`

const Column = styled.div`
  display: flex;
	justify-content: center;
`

const InputTitle = styled.input`
  border-radius: 1rem;
  border: none;
  background-color: var(--light-light-gray);
  margin: 1rem;
  padding: 0.5rem 1rem;
  color: black;
`

const InputPassword = styled.input`
  border: 1px solid var(--light-light-gray);
  background-color: white;
  margin: 0.5rem 3rem;
  padding: 0.5rem 1rem;
  color: black;
`

const CreateButton = styled.button`
  margin: 1rem 0 1rem 0;
  width: 5rem;
	border: none;
	border-radius: 1rem;
	background-color: var(--purple);
`

const CancelButton = styled.button`
  margin: 1rem 1rem 1rem 0;
  width: 5rem;
	border: none;
	border-radius: 1rem;
	background-color: var(--light-light-gray);
`

const ButtonText = styled.div`
	margin: 1rem;
	font-size: 1rem;
	color: black;
`

const RadioButton = styled.input`
  align-self: center;
`

const Label= styled.label`
  margin: 0.5rem;
  color: black;
  background: none;
`

const Radio = ({label, index, select, handler}: {label: string, index: number, select: number, handler: any}) => {
  return (
    <>
      <RadioButton 
        type="radio"
        value={index}
        checked={select === index}
        onChange={() => handler(index)} />
      <Label>{label}</Label>
    </>
  )
}

const CreateChannel = ({modalHandler} : ModalProps) => {
  const [tmp, setTmp] = useState("");
  const [select, setSelect] = useState(1);

	const onClickCreate = () => {

	}

  return (
    <BackDrop modalHandler={modalHandler}>
      <Box>
        <Wrapper>
          <Title>새 채널 생성하기</Title>
          <InputTitle id="input_title" type="text" placeholder="title" maxLength={28} />
          <Column>
            <Radio label="Public" index={1} select={select} handler={setSelect} />
            <Radio label="Protected" index={2} select={select} handler={setSelect} />
            <Radio label="Private" index={3} select={select} handler={setSelect} />
          </Column>
          {select === 2 ? <InputPassword id="input_password" type="text" placeholder="passward" maxLength={16} /> : null }
          <Column>
            <CancelButton onClick={modalHandler}>
              <ButtonText>취소</ButtonText>
            </CancelButton>
            <CreateButton onClick={onClickCreate}>
              <ButtonText>확인</ButtonText>
            </CreateButton>
          </Column>
        </Wrapper>
      </Box>
    </BackDrop>
  );
};

export default CreateChannel;
