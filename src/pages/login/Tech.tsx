import styled from "styled-components"
import docker from "./asset/docker.png"
import computer from "./asset/computer.png"
import github from "./asset/github.png"
import typescript from "./asset/typescript.png"
import react from "./asset/react.png"
import vite from "./asset/vite.svg"
import styledComponents from "./asset/styled-components.png"
import nestjs from "./asset/nest.svg"
import postgresql from "./asset/postgresql.png"

type Props = {
    img: string,
    title: string,
}

type imageMapType = {
    [index: string] : string,
}

const imageMap : imageMapType = {
    "docker" : docker,
    "computer" : computer,
    "github" : github,
    "typescript" : typescript,
    "react" : react,
    "vite" : vite,
    "styledComponents" : styledComponents,
    "nestjs" : nestjs,
    "postgresql" : postgresql,
}

const Wrapper = styled.div`
  color: var(--dark-gray);
  background:var(--white);
  width:80%;
  border: 1px solid black;
  border-radius: 1em;
  display: flex;
  align-items:center;
    & > img {
        background: inherit;
        margin: 1em;
    }
`

const Tech = ({img, title} : Props) => {
    const image = imageMap[img];
    return (
        <Wrapper>
            <img width="48px" src={image}/>
            {title}
        </Wrapper>
    );
};

export default Tech;