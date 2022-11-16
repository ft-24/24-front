import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 240px;
`;

type DynamicPadding = {
  padding: string;
}

const Image = styled.img<DynamicPadding>`
  padding: ${props=>props.padding};
  display: block;
  width: 240px;
  height: 240px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.span`
  text-align: center;
  color: var(--white);
  margin-bottom: 10px;
  font-family: SBAggroM;
  font-size: 18px;
  font-weight: bold;
  background: none;
`

const ImageCard = (props: { text: string, imagePath: string, imagePadding: string, routePath: string }) => {
  return (
    <Wrapper>
      <Link to={props.routePath}>
        <ImageContainer>
        <Image padding={props.imagePadding} src={props.imagePath}/>
        </ImageContainer>
      </Link>
      <TextContainer>
        <Text>{props.text}</Text>
      </TextContainer>
    </Wrapper>
  );
}

export default ImageCard;