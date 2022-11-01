import React from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 8,
  padding: 8,
  display: flex,
  flex-direction: row,
  borde-radius: 16,
  overflow: auto,
`;

const ImageList = () => {
  return (
    <Wrapper>
      <ImageCard text={"1:1"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Ladder"} imagePath={"/images/earth.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Classic"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Arcade"} imagePath={"/images/earth.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Social"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
    </Wrapper>
  )
}

export default ImageList;