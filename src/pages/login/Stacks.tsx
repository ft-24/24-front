import styled, { keyframes } from "styled-components";
import Images from "./StackImages";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 8));
  }
`;

const Slider = styled.div`
  height: 250px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
  margin-top: 2rem;
`;

const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  width: calc(250px * 16);
  gap: 2rem;
  &:hover {
    animation-play-state: paused;
  }
`;

const Slide = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 80%;
    height: 80%;
  }
  &:hover {
    transform: scale(1.1, 1.1);
    & > p {
      display: block;
    }
  }
`;

const Description = styled.p`
  position: absolute;
  display: none;
`;

const TitleWrapper = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 4rem;
  margin-top: 4rem;
`;

const Stacks = () => {
  let ImageArray = [];
  for (let image of Object.values(Images)) {
    ImageArray.push(image);
  }

  return (
    <>
      <TitleWrapper>Stacks</TitleWrapper>
      <Slider>
        <SlideTrack>
          {ImageArray.map((ele) => {
            const name = ele.slice(23, -4);
            return (
              <Slide key={ele}>
                <img src={ele} />
                <Description>{name}</Description>
              </Slide>
            );
          })}
          {ImageArray.map((ele) => {
            const name = ele.slice(23, -4);
            return (
              <Slide key={ele + "2"}>
                <img src={ele} />
                <Description>{name}</Description>
              </Slide>
            );
          })}
        </SlideTrack>
      </Slider>
    </>
  );
};

export default Stacks;
