import React from "react";
import ImageCard from "./ImageCard";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    bordeRadius: 16,
  },
}

const ImageList = () => {
  return (
    <div style={styles.wrapper}>
      <ImageCard text={"1:1"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Ladder"} imagePath={"/images/earth.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Classic"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Arcade"} imagePath={"/images/earth.jpg"} routePath={"/matching"}/>
      <ImageCard text={"Social"} imagePath={"/images/game.jpg"} routePath={"/matching"}/>
    </div>
  )
}

export default ImageList;