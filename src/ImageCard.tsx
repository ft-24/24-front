import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "column",
    bordeRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 250,
    height: 250,
    borderRadius: 25,
  },
  TextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
};

const ImageCard = (props: { text: string, imagePath: string }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src={props.imagePath}
          style={styles.image}
        />
      </div>

      <div style={styles.TextContainer}>
        <span style={styles.Text}>{props.text}</span>
      </div>
    </div>
  );
}

export default ImageCard;