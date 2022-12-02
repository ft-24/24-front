import axios from "axios";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { Url } from "../../constants/Global";
import { useAuthState } from "../../context/AuthHooks";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  grid-area: name;
`

const ProfileTitle = styled.h1`
	margin-top: 0.25em;
	font-size: 3em;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba( 0, 0, 0, 0 );
	font-family:SBAggroM;
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  display: inline-block;
  line-height: 2.2em;
  padding: 0 0.62em;
  color: var(--light-gray);
  border: none;
  border-radius: 0.25em;
  background-color: --black;
  box-shadow: inset 0 0 0.1em #fff, 0.2em 0.2em 0.2em rgba( 0, 0, 0, 0.3 );
  &:hover {
		color: var(--white);
  }
`;

const UserName = ({name, children}: {name: string, children: any} ) => {
  const [nickname, setNickname] = useState(name ?? "noname");
  const [isChange, setIsChange] = useState(false);

  const { token } = useAuthState();

  const [temp, setTemp] = useState("");
  const handleChange = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setTemp(event.currentTarget.value);
  }

  const setProfileName = async (name: string) => {
    await axios.put(Url + 'user/profile/nickname', {
      nickname: name
    }, {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then (response => {
      console.log("set profile name: " + response.status);
      setNickname(name);
    }).catch (error => {
      console.error('set name failed');
    });
  }

  return (
    <Wrapper>
      <ProfileTitle>{nickname} {children}</ProfileTitle>
        { isChange ? <input id="input_name" type="text" onChange={handleChange}/> : null }
      <Button onClick={() => {
        if (isChange === false) {
          setIsChange(prev => !prev);
        } else {
          setProfileName(temp);
          setIsChange(prev => !prev)
        }
      }}>{isChange ? "submit" : "change nickname"}</Button>
    </Wrapper>
  );
}

export default UserName;