import styled, {keyframes} from "styled-components";
import Images from "./AboutImages";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 8));
  }
`

const Slider = styled.div`
  height: 250px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
`
const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  width: calc(250px * 16);
  gap: 2rem;
  &:hover {
    animation-play-state: paused;
  }
`
const Slide = styled.div`
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
  }
`

const TitleWrapper = styled.div`
	width:100%;
	font-weight: 700;
	font-size: 4em;
`;

const About = () => {
  let ImageArray = [];
  for (let image of Object.values(Images)) {
    ImageArray.push(image);
  }

  return (
    <>
      <TitleWrapper>Stacks</TitleWrapper>
      <Slider>
          <SlideTrack>
            {ImageArray.map(ele => {
              return <Slide><img src={ele} key={ele}/></Slide>
            })}
            {ImageArray.map(ele => {
              return <Slide><img src={ele} key={ele+"2"}/></Slide>
            })}
          </SlideTrack>
      </Slider>
    </>
  )
}

export default About;
