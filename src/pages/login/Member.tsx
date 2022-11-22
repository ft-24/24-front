import styled from "styled-components";
import { motion } from "framer-motion";

type Position = {
  position: string;
};

const Wrapper = styled(motion.div)<Position>`
  width: 310px;
  height: 500px;
  margin: 40px;
  background: transparent;
  perspective: 1000px;
  border-radius: 1.5rem;
  &:hover {
    box-shadow: 0 14px 28px
        ${(props) =>
          props.position == "FrontEnd" ? `var(--yellow)` : `var(--purple)`},
      0 10px 10px
        ${(props) =>
          props.position == "FrontEnd" ? `var(--yellow)` : `var(--purple)`};
  }
`;

type State = {
  isFront: boolean;
};

const Container = styled.div<State>`
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.6s 0.1s;
  transform: ${(props) => (props.isFront ? `rotateY(180deg)` : "")};
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 1.5rem;
  top: 0;
  left: 0;
  overflow: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled(Card)`
  transform: rotateY(0deg);
  background-image: url("/src/images/background.jpg");
`;

const Front = styled(Card)`
  position: relative;
  transform: rotateY(180deg);
  color: var(--dark-gray);
`;

const FrontBG = styled.div<Position>`
  background: ${(props) =>
    props.position == "FrontEnd" ? `var(--yellow)` : `var(--purple)`};
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

type Img = {
  img: string;
};

const Avatar = styled.div<Img>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 10%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

const FrontContent = styled.div<Position>`
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

type Props = {
  position: string;
  name: string;
  idx: number;
  onClickHandler: any;
  isFront: boolean;
  img: string;
};

const Member = ({
  position,
  name,
  idx,
  onClickHandler,
  isFront,
  img,
}: Props) => {
  return (
    <Wrapper
      position={position}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragSnapToOrigin={true}
    >
      <Container
        onClick={() => {
          onClickHandler(idx);
        }}
        isFront={isFront}
      >
        <Back></Back>
        <Front>
          <FrontBG position={position}>{position}</FrontBG>
          <Avatar img={img}></Avatar>
          <FrontContent position={position}>{name}</FrontContent>
        </Front>
      </Container>
    </Wrapper>
  );
};

export default Member;
