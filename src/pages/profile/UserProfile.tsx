import React, { useState } from "react";
import styled from "styled-components";
import { UserProps } from "./ProfileProps";
import ImageUploading, { ImageType } from "react-images-uploading";

const ProfileImg = styled.img`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 1em;
`;

const ProfileTitle = styled.h1`
  font-size: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = ({data} : {data : UserProps}) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div>
            <ProfileImg src={ imageList[0] ? imageList[0].dataURL : "" }></ProfileImg>
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={ imageList[0] && imageList[0].file ? () => onImageUpdate(0) : onImageUpload }
              {...dragProps}
            >
              {"change profile image"}
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

const UserProfile = ({data} : {data : UserProps}) => {

  return (
    <div>
      <ProfileTitle>{data.nickname}</ProfileTitle>
      <ProfileImage data={data} />
    </div>
  );
}

export default UserProfile;
