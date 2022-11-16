import styled from "styled-components";
import docker from "./asset/docker.png";
import computer from "./asset/computer.png";
import github from "./asset/github.png";
import typescript from "./asset/typescript.png";
import react from "./asset/react.png";
import vite from "./asset/vite.svg";
import styledComponents from "./asset/styled-components.png";
import nestjs from "./asset/nest.svg";
import postgresql from "./asset/postgresql.png";

type Props = {
  img: string;
  title: string;
};

type imageMapType = {
  [index: string]: string;
};

const imageMap: imageMapType = {
  docker: docker,
  computer: computer,
  github: github,
  typescript: typescript,
  react: react,
  vite: vite,
  styledComponents: styledComponents,
  nestjs: nestjs,
  postgresql: postgresql,
};

const Wrapper = styled.a`
  color: var(--dark-gray);
  background: var(--white);
  width: 80%;
  border: 1px solid black;
  border-radius: 1em;
  display: flex;
  align-items: center;
  & > img {
    background: inherit;
    margin: 1em;
    width: 48px;
  }
  & > p {
    background: inherit;
    color: inherit;
  }
  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: center;
    font-size:14px;
    margin: 0.3em;
    width: 100%;
    & > img {
        width: 36px;
    }
    & > p {
      display: none;
    }
  }
`;

const Tech = ({ img, title }: Props) => {
  const image = imageMap[img];
  return (
    <Wrapper>
      <img src={image} />
      <p>{title}</p>
    </Wrapper>
  );
};

export default Tech;
