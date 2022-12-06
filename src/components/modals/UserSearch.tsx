import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";
import { BackDrop, ModalProps } from "./ModalUtils";

const Box = styled.div`
  width: 40rem;
  height: 30rem;
  padding: 3rem;
  background: var(--white);
  color: var(--dark-gray);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: NanumSquareL;
  & > * {
    background: transparent;
  }
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
`;

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

const Input = styled.input`
  display: inline-block;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--light-gray);
  text-align: center;
  font-family: NanumSquareL;
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
    background: #8156ff;
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

const ContentWrapper = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    &::-webkit-scrollbar{
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb{
		background-color: var(--purple);
		border-radius: 10px;    
	}
    &::-webkit-scrollbar-track{
		background-color: rgba(0,0,0,0);
	}
`

const UserCard = styled.div`
    width: 80%;
    height: 3rem;
    padding: 1rem;
    font-family: NanumSquareR;
    display: flex;
    justify-content: space-between;
  &:hover {
    scale: 1.05;
    cursor: pointer;
    background: var(--light-light-gray);
  }
`

const UserName = styled.div`
`
const ChatButton = styled.div`
`

type User = 
{
    nickname: string,
    intraID: string,
    profile: string,
};

const dummyUserArray = [
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
    {nickname: "선호", intraID: "seonhjeo", profile: "profile"},
    {nickname: "썬킴", intraID: "sunhkim", profile: "profile"},
    {nickname: "찬휘", intraID: "chanhuil", profile: "profile"},
    {nickname: "요안", intraID: "yoahn", profile: "profile"},
    {nickname: "영일", intraID: "young-ch", profile: "profile"},
];

type SearchState = {
    [index:string] : JSX.Element | JSX.Element[] | null,
    NONE: null,
    LOAD : JSX.Element,
    DONE : JSX.Element[] | JSX.Element,
    SEND : JSX.Element,
}

const UserSearch = ({ modalHandler }: ModalProps) => {
  const [value, setValue] = useState("");
  const [userArray, setUserArray] = useState<User[]>([]);
  const [state, setState] = useState("NONE");

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const findUsers = () => {
      setState("LOAD");
      const _users = dummyUserArray.filter((ele)=> ele.intraID.indexOf(value) !== -1);
      setUserArray(_users);
      setState("DONE");
  }
  useEffect(()=>{
    let _interval : number;
    if (value.length === 0)
        setState("NONE");
    else {
    _interval = setTimeout(findUsers, 500);
    }
    return (()=>{
        if (_interval)
            clearTimeout(_interval)
    })
  },[value])

  const SearchContent : SearchState = {
    "NONE" : null,
    "LOAD" : <Loader title="찾는중..."/>,
    "DONE" : userArray.length!==0 ? userArray.map((ele, idx)=>{
        return <UserCard key={idx} onClick={()=>{setState("SEND")}}>
          <UserName>
          {`${ele.nickname}(${ele.intraID})`}
          </UserName>
          <ChatButton>
          💬
          </ChatButton>
          </UserCard>
    }) : <div>유저를 찾을 수 없습니다.</div>,
    "SEND" : <div>친구요청을 보냈습니다.</div>
  };

  return (
    <BackDrop modalHandler={modalHandler}>
      <Box>
        <Title>유저찾기 </Title>
        <InputForm onSubmit={(e)=>{e.preventDefault()}}>
          <InputContainer>
            <Input
              value={value}
              onChange={onChangeHandler}
              type="text"
              placeholder="인트라 아이디를 입력하세요"
            />
            <Bar />
          </InputContainer>
        </InputForm>
        <ContentWrapper>
        {SearchContent[state]}
        </ContentWrapper>
      </Box>
    </BackDrop>
  );
};

export default UserSearch;
