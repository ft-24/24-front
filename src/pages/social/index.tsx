import styled from "styled-components";
import Nav from "./components/Nav";
import Info from "./components/Info";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import PublicList from "./components/PublicList";
import { useState } from "react";
import DMList from "./components/DMList";

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
  const [receiver, setReceiver] = useState("");
  const [infoIntra, setInfoIntra] = useState("");
  const [isInfoOn, setIsInfoOn] = useState(false);
  const [isListOn, setIsListOn] = useState(false);
  const [isDMListOn, setIsDMListOn] = useState(false);

  return (
    <Wrapper>
      <Container>
        <NavSection>
          <Nav
            setLocate={setLocate}
            setIsDMListOn={setIsDMListOn}
            setIsListOn={setIsListOn}
            setIsInfoOn={setIsInfoOn}
            setInfoIntra={setInfoIntra}/>
        </NavSection>
        {isDMListOn ? (
          <ListSection>
            <DMList setIsListOn={setIsDMListOn} setLocate={setLocate} setReceiver={setReceiver}/>
          </ListSection>
        ) : null}
        {isListOn ? (
          <ListSection>
            <PublicList setIsListOn={setIsDMListOn} setLocate={setLocate} setReceiver={setReceiver}/>
          </ListSection>
        ) : null}
        <MainSection>
          {locate === "home" ?
            <Home
              setLocate={setLocate}
              setReceiver={setReceiver} /> : null}
          {locate === "chat" ?
            <ChatRoom
              receiver={receiver}
              setIsInfoOn={setIsInfoOn}
              setInfoIntra={setInfoIntra} /> : null}
        </MainSection>
        {isInfoOn ? (
          <InfoSection>
            <Info setIsInfoOn={setIsInfoOn} intra={infoIntra}/>
          </InfoSection>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Social;
