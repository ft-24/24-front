import styled, { keyframes } from "styled-components";

const paddles = keyframes`
    0% {
        box-shadow: -25px -10px 0px var(--purple), 25px 10px 0px var(--purple);
    }
    50% {
      box-shadow: -25px 8px 0px var(--purple), 25px -10px 0px var(--purple);
    }
    100% {
      box-shadow: -25px -10px 0px var(--purple), 25px 10px 0px var(--purple);
    } 
    `;
const ballbounce = keyframes`
    0%{
      transform: translateX(-20px) scale(1,1.2);
    }
    25%{
      transform: scale(1.2,1);
    }
    50% {
      transform: translateX(15px) scale(1,1.2);
    }
    75% {
        transform: scale(1.2,1);
    }
    100% {
        transform: translateX(-20px);
    } 
    `;

const PongLoader = styled.div`
  height: 40px;
  width: 6px;
  background-color: transparent;
  animation: ${paddles} 0.75s ease-out infinite;
  transform: translate3d(0, 0, 0);

  &:before {
    content: "";
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 15px;
    width: 10px;
    height: 10px;
    background-color: var(--purple);
    border-radius: 50%;
    animation: ${ballbounce} 0.6s ease-out infinite;
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
`

type Props = {
    title: string,
}

const Loader = ({title} : Props) => {
  return (
      <Wrapper>
          <PongLoader></PongLoader>
          <div>{title}</div>
      </Wrapper>
  )
};

export default Loader;
