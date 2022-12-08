import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 240px;
  background: rgba(0, 0, 0, 0);
`;

type DynamicPadding = {
  padding: string;
}

const Image = styled.img<DynamicPadding>`
  padding: ${props=>props.padding};
  display: block;
  width: 240px;
  height: 240px;
  background: rgba(0, 0, 0, 0);
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

const ImageCard = (props: { text: string, imagePath: string, imagePadding: string, routePath?: string, onClickHandler?: VoidFunction }) => {
  return (
    <Wrapper>
      {
        props.routePath ? 
      <Link to={props.routePath}>
        <ImageContainer>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image padding={props.imagePadding} src={props.imagePath}/>
          </motion.div>
        </ImageContainer>
      </Link> :
      <div onClick={props.onClickHandler}>
        <ImageContainer>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image padding={props.imagePadding} src={props.imagePath}/>
          </motion.div>
        </ImageContainer>
      </div>
      }
      <TextContainer>
        <Text>{props.text}</Text>
      </TextContainer>
    </Wrapper>
  );
}

export default ImageCard;