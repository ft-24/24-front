import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8;
  padding: 8;
  display: flex;
  flex-direction: column;
  bordeRadius: 16;
`;
const ImageContainer = styled.button`
  width: 250px;
  height: 250px;
  border-radius: 25;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Text = styled.span`
  text-align: center;
  color: black;
  font-size: 16;
  font-weight: bold;
`

const ImageCard = (props: { text: string, imagePath: string, routePath: string }) => {
  return (
    <Wrapper>
      <Link to={props.routePath}>
        <ImageContainer>
        <Image src={props.imagePath}/>
        </ImageContainer>
      <TextContainer>
        <Text>{props.text}</Text>
      </TextContainer>
      </Link>
    </Wrapper>
  );
}

export default ImageCard;