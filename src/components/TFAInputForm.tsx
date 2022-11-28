import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation, Navigate ,useNavigation } from "react-router-dom";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--white);
  color: var(--dark-gray);

  & > * {
    background: inherit;
    color: inherit;
  }
  & > p {
    text-align: center;
  }
  & > a {
    color: blue;
    cursor: pointer;
  }
`;

type isValid = {
  isValid: boolean;
};

const ErrorMessage = styled.p`
  color: red;
`;

const Submit = styled.button<isValid>`
  display: ${(props) => (props.isValid ? "inline-block" : "none")};
  width: 100%;
  background: var(--purple);
  font-size: 1rem;
  font-weight: 800;
  padding: 0.5rem;
  border-radius: 3px;
  border: 0;
`;

const Input = styled.input`
  display: inline-block;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--light-gray);
  text-align: center;
  &:focus {
    outline: 0;
    & ~ *::before,
    & ~ *::after {
      width: 50%;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  & > * {
    background: inherit;
    color: inherit;
  }
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 300px;
  &::after,
  &::before {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
`;

const TFAInputForm = ({setAuthState, setUserInput, setIsAuthFail} : any) => {
  const [inputValue, setInputValue] = useState("");
  const [wrongForm, setWrongForm] = useState(false);
  const [isValid, setIsValid] = useState(false);


  const checkValid = () => {
    if (inputValue.length === 6 && inputValue.match(/^[0-9]+$/)) {
      setIsValid(true);
      setWrongForm(false);
      setIsAuthFail("none");
    } else if (inputValue == "") {
      setWrongForm(false);
    } else {
      setWrongForm(true);
      setIsValid(false);
    }
  };
  
  useEffect(() => {
    let time = setTimeout(checkValid, 500);
    return (()=>{
      clearTimeout(time);
    })
  }, [inputValue]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmmit = async (e: any) => {
    e.preventDefault();
    setUserInput(inputValue);
  };

  return (
    <InputForm>
      <p>확인코드가 등록된 이메일로 전송되었습니다.</p>
      <p>계속하려면 코드를 입력하십시오.</p>
      {wrongForm ? (
        <ErrorMessage>확인코드는 6자리 숫자입니다.</ErrorMessage>
      ) : null}
      <InputContainer>
        <Input
          value={inputValue}
          onChange={handleChange}
          type="tel"
          maxLength={6}
          placeholder="6-Digit-Codes here"
          autoComplete="off"
        />
        <Bar />
      </InputContainer>
      <Submit onClick={handleSubmmit} isValid={isValid}>
        확인
      </Submit>
      <a>확인 코드를 받지 못했습니까?</a>
    </InputForm>
  );
};

export default TFAInputForm;
