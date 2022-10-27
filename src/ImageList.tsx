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
      <ImageCard text={"Test1"} imagePath={"/images/game.jpg"}/>
      <ImageCard text={"Test2"} imagePath={"/images/earth.jpg"}/>
    </div>
  )
}

export default ImageList;