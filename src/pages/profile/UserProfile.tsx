import React, { useState } from "react";
import styled from "styled-components";
import { UserProps } from "./ProfileProps";
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
  margin-top: 0.25em;
  font-size: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const ProfileStat = styled.h2`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
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

const ProfileName = (name : {name : string} ) => {
  const [nickname, setNickname] = React.useState(name.name ?? "default");
  const [isChange, setIsChange] = React.useState(false);

  const [temp, setTemp] = React.useState("");
  const handleChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setTemp(event.currentTarget.value);
  }
  return (
    <>
      <ProfileTitle>{ nickname }</ProfileTitle>
        { isChange ? <input id="input_name" type="text" onChange={handleChange}/> : null }
      <Button onClick={() => {
        if (isChange === false) {
          setIsChange(prev => !prev);
        } else {
          setNickname(temp);
          // TODO : axios.set();
          setIsChange(prev => !prev)
        }
      }}>{isChange ? "submit" : "change nickname"}</Button>
    </>
  );
}

const ProfileImage = ({data} : {data : UserProps}) => {

  const [image, setImage] = React.useState(data.profimgdir);

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
    <>
      <ProfileImg src={ image } alt="not fount"></ProfileImg>
      <Input type='file' id='ProfileImg' accept='image/*' name='file' onChange={onImgChange}></Input>
      <Label htmlFor="ProfileImg">Upload image</Label>
    </>
  );
}

const ProfileStats = ({data} : {data : UserProps}) => {
  const [rank, setRank] = React.useState(data.rank);
  const [stat, setStat] = React.useState(data.Stats);

  return (
    <>
    <ProfileStat> {"Rank : " + rank}</ProfileStat>
    <ProfileStat> {"Win : " + stat.get("totalWin") + "  Lose : " + stat.get("totalLose")}</ProfileStat>
    </>
  );
}

const UserProfile = ({data} : {data : UserProps}) => {
  return (
    <>
      <ProfileName name={data.nickname} />
      <ProfileImage data={data} />
      <ProfileStats data={data} />
    </>
  );
}

export default UserProfile;
