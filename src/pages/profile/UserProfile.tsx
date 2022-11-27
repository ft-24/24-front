import React from "react";
import styled from "styled-components";
import axios from "axios";
import { UserProps } from "./ProfileProps";
import { useAuthState } from "../../context/AuthHooks";

const ProfileImg = styled.img`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 1em;
  background: rgba( 0, 0, 0, 0 );
`;

const ProfileTitle = styled.h1`
  margin-top: 0.25em;
  font-size: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  line-height: 2.2em;
  padding: 0 0.62em;
  border: 1px solid #666;
  border-radius: 0.25em;
  background-color: --black;
  box-shadow: inset 0 0 0.1em #fff, 0.2em 0.2em 0.2em rgba( 0, 0, 0, 0.3 );
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  line-height: 2.2em;
  padding: 0 0.62em;
  border: 1px solid #666;
  border-radius: 0.25em;
  background-color: --black;
  box-shadow: inset 0 0 0.1em #fff, 0.2em 0.2em 0.2em rgba( 0, 0, 0, 0.3 );
`;

const Stat = styled.div`
  margin: 0.5em 0.25em 0 0.25em;
  height: auto;
  color: var(--light-gray);
`

const ProfileName = ({name} : {name : string} ) => {
  const [nickname, setNickname] = React.useState(name ?? "noname");
  const [isChange, setIsChange] = React.useState(false);
  const { token } = useAuthState();

  const [temp, setTemp] = React.useState("");
  const handleChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setTemp(event.currentTarget.value);
  }

  const setProfileName = async (name: string) => {
    await axios.put('http://10.12.8.7:3000/user/profile/nickname', {
      nickname: name
    }, {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then (response => {
      console.log("set profile name: " + response.status);
      setNickname(name);
    }).catch (error => {
      alert('image upload failed');
    });
  }

  return (
    <>
      <ProfileTitle>{ nickname }</ProfileTitle>
        { isChange ? <input id="input_name" type="text" onChange={handleChange}/> : null }
      <Button onClick={() => {
        if (isChange === false) {
          setIsChange(prev => !prev);
        } else {
          setProfileName(temp);
          setIsChange(prev => !prev)
        }
      }}>{isChange ? "submit" : "change nickname"}</Button>
    </>
  );
}

const ProfileImage = ({profile_url} : {profile_url : string}) => {
  const [image, setImage] = React.useState(profile_url);
  const { token } = useAuthState();

  const setProfileImage = async (file: any) => {
    const formData = new FormData();
    formData.append('image', file);
    
    await axios.put('http://10.12.8.7:3000/user/profile/image'
      , formData
      , {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then(response => {
      console.log("set profile image: " + response.status);
      const url = URL.createObjectURL(file);
      setImage(url);
    }).catch(error => {
      alert('image upload failed');
    });
  }

  const onImgChange = async (event: any) => {
    const file = event.currentTarget.files[0];
    if (file !== undefined) {
      setProfileImage(file);
    }
  }

  return (
    <>
      <ProfileImg src={ image } alt="not fount"></ProfileImg>
      <Input type='file' id='ProfileImg' accept='image/*' name='file' onChange={onImgChange}></Input>
      <Label htmlFor="ProfileImg">Upload image</Label>
    </>
  );
}

const UserProfile = ({data} : {data : UserProps}) => {
  return (
    <>
      <ProfileName name={data.nickname} />
      <ProfileImage profile_url={data.profile_url} />
    </>
  );
}

export default UserProfile;
