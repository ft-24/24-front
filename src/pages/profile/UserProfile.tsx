import React, { useState } from "react";
import styled from "styled-components";
import { Item, UserProps } from "./ProfileProps";
import axios from "axios";

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
  font-size: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  height: 3rem;
  background: var(--white);
  color: var(--dark-gray);
`

const Stat = styled.div`
  margin: 0.5em 0.25em 0 0.25em;
  height: auto;
  color: var(--light-gray);
`

const ProfileName = ({name} : {name : string} ) => {
  const [nickname, setNickname] = React.useState(name ?? "default");
  const [isChange, setIsChange] = React.useState(false);

  const [temp, setTemp] = React.useState("");
  const handleChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setTemp(event.currentTarget.value);
  }
  return (
    <>
      <ProfileTitle>{ nickname }</ProfileTitle>
        { isChange ? <input id="input_name" type="text" onChange={handleChange}/> : null }
      <button onClick={() => {
        if (isChange === false) {
          setIsChange(prev => !prev);
        } else {
          setNickname(temp);
          // TODO : axios.set();
          setIsChange(prev => !prev)
        }
      }}>{isChange ? "submit" : "change nickname"}</button>
    </>
  );
}

const ProfileImage = ({data} : {data : UserProps}) => {

  const [image, setImage] = React.useState(data.profile_url);

  const onImgChange = async (event: any) => {
    const file = event.currentTarget.files[0];
    if (file !== undefined) {
      setImage(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append('file', event.currentTarget.files[0]);
      const response = await axios.putForm(" ", formData);
    }
  }

  return (
    <div>
      <ProfileImg src={ image } alt="not fount"></ProfileImg>
      <Input type='file' id='ProfileImg' accept='image/*' name='file' onChange={onImgChange}></Input>
      <Label htmlFor="ProfileImg">Click me to upload image</Label>
    </div>
  );
}

const ProfileStats = ({data} : {data : UserProps}) => {
  return (
    <div>
      {
        data.stats.map((item : Item, index) => (
          <>
            {console.log(item.label + ":" + item.value)}
            <Stat>{item.label} : {item.value}</Stat>
          </>
        ))
      }
    </div>
  )
}

const UserProfile = ({data} : {data : UserProps}) => {
  return (
    <div>
      <ProfileName name={data.nickname} />
      <ProfileImage data={data} />
      <ProfileStats data={data} />
    </div>
  );
}

export default UserProfile;
