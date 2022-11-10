import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const Wrapper = styled.div`
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
      <ImageCard text={"1:1"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Ladder"} imagePath={"/images/earth.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Classic"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Arcade"} imagePath={"/images/earth.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Social"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
    </Wrapper>
  )
}

export default ImageList;