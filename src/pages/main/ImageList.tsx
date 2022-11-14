import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: none;
  white-space: nowrap;
  background: var(--dark-gray);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ImageList = () => {
  return (
    <Wrapper className="wrapper">
      <ImageCard text={"Private"} imagePath={"/images/lock.png"} imagePadding="15px" routePath={"/matching"}/>
      <ImageCard text={"Public"} imagePath={"/images/earth.png"} imagePadding="25px" routePath={"/matching"}/>
      <ImageCard text={"Arcade"} imagePath={"/images/controller.png"} imagePadding="15px" routePath={"/matching"}/>
      <ImageCard text={"Ladder"} imagePath={"/images/trophy.png"} imagePadding="15px" routePath={"/matching"}/>
      <ImageCard text={"Social"} imagePath={"/images/chat.png"} imagePadding="20px" routePath={"/matching"}/>
    </Wrapper>
  )
}

export default ImageList;