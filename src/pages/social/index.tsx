import styled from "styled-components";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Chat from "./components/Chat";
import Home from "./components/Home";
import List from "./components/List";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/src/images/background.jpg");
  font-family: NanumSquareL;
`;

const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
`;

const NavSection = styled.div`
  flex: 0;
`;

const MainSection = styled.div`
  flex: 4;
  overflow: hidden;
`;

const InfoSection = styled.div`
  flex: 2;
`;

const ListSection = styled.div`
  flex: 1.5;
  background: var(--dark-gray);
`;

const Social = () => {
  const [locate, setLocate] = useState("home");
  const [title, setTitle] = useState("");
  const [isInfoOn, setIsInfoOn] = useState(false);
  const [isListOn, setIsListOn] = useState(false);

  return (
    <Wrapper>
      <Container>
        <NavSection>
          <Nav setLocate={setLocate} setIsListOn={setIsListOn} setIsInfoOn={setIsInfoOn}/>
        </NavSection>
        {isListOn ? (
          <ListSection>
            <List setIsListOn={setIsListOn} setLocate={setLocate}/>
          </ListSection>
        ) : null}
        <MainSection>
          {locate === "home" ? <Home setLocate={setLocate} setTitle={setTitle}></Home> : null}
          {locate === "dm" ? <Chat setIsInfoOn={setIsInfoOn} setTitle={setTitle}></Chat> : null}
        </MainSection>
        {isInfoOn ? (
          <InfoSection>
            <Info setIsInfoOn={setIsInfoOn} />
          </InfoSection>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Social;
