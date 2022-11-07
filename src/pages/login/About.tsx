import { useState } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Tech from "./Tech";
import Member from "./Member";

const Window = styled.div`
  margin-top: 5em;
  width: 80%;
  height: 100%;
  border-radius: 1em;
  background: var(--dark-gray);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Navbar = styled.nav`
  background: var(--light-gray);
  border-radius: 1em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 15%;
  display: flex;
  align-items:center;
`

type tabType = {
  active : boolean,
}

const Tab = styled.div<tabType>`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  height: 100%;
  font-size: 24px;
  padding: 1em 2em 0em;
  border-radius: 1em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1em solid white;
  background: ${props=>props.active ? `var(--white)` : `var(--light-gray)`};
  color: ${props=>props.active ? `var(--light-gray)` : `var(--white)`};
  &:hover {
    background: var(--white);
    color: var(--dark-gray);
  }
` 

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  padding: 5em;
  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 0;
  }
`

const section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    width: 100%;
  }
`

const Stack = styled(section)`
  @media (max-width: 1100px) {
    flex-direction: row;
    width: 100%;
  }
`

const Members = styled(section)`
  text-transform:uppercase;
  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`


type TechsMapType = {
  [index: string] : string[][],
}

const Techs : TechsMapType = {
  "common" : [
    ["typescript", "TypeScript"],
    ["docker", "Docker"],
    ["github", "Github"],
    ["computer", "Some CS"],
  ],
  "fe" : [
    ["react", "React"],
    ["vite", "Vite"],
    ["styledComponents", "Styled-Components"],
  ],
  "be" : [
    ["nestjs", "NestJS"],
    ["postgresql", "PostgreSQL"],
  ]
};

type MemberMapType = {
  [index:string] : string[];
}

const MembersArray : MemberMapType = {
  "common" : [
    "chanhuil", "seonhjeo", "sunhkim", "yoahn", "young-ch"
  ],
  "fe" : [
    "seonhjeo", "sunhkim", "young-ch"
  ],
  "be" : [
    "chanhuil", "yoahn"
  ]
}

const About = () => {
  const [tab, setTab] = useState<string>("common");

    return (
      <Window>
        <Navbar>
          <Tab active={tab == "common"} onClick={()=>{setTab("common")}}>Common</Tab>
          <Tab active={tab == "fe"} onClick={()=>{setTab("fe")}}>FrontEnd</Tab>
          <Tab active={tab == "be"} onClick={()=>{setTab("be")}}>BackEnd</Tab>
        </Navbar>
        <Content>
          <Stack>
            {
              Techs[tab].map((ele : string[]) => <Tech img={ele[0]} title={ele[1]}/>)
            }
          </Stack>
          <Members>
            {
              MembersArray[tab].map((ele: string) => <Member name={ele}/>)
            }
          </Members>
        </Content>
      </Window>
    );
}

export default About;
