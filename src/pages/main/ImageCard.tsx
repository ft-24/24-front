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
  text-align: center;
`;

const Image = styled.img`
  margin: auto;
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
  margin-top: 14px;
  font-family: SBAggroM;
  font-size: 18px;
  font-weight: bold;
  background: none;
`

const ImageCard = (props: { text: string, imagePath: string, routePath: string }) => {
  return (
    <Wrapper>
      <Link to={props.routePath}>
        <ImageContainer>
        <Image src={props.imagePath}/>
        </ImageContainer>
      </Link>
      <TextContainer>
        <Text>{props.text}</Text>
      </TextContainer>
    </Wrapper>
  );
}

export default ImageCard;