import styled from "styled-components";
import Nav from "./components/Nav";
import Info from "./components/Info";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import JoinedList from "./components/JoinedList";
import { useState } from "react";
import DMList from "./components/DMList";
import { useParams } from "react-router-dom";
import CreateChannel from "../../components/modals/CreateChannel";

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
  const pathVar = useParams();
  const target = pathVar ? pathVar.receiver : "undefined";

  const [locate, setLocate] = useState(target ? "chat" : "home");
  const [type, setType] = useState("dm");
  const [infoIntra, setInfoIntra] = useState("");

  const [isInfoOn, setIsInfoOn] = useState(false);
  const [isListOn, setIsListOn] = useState(false);
  const [isDMListOn, setIsDMListOn] = useState(false);
	const [isModalOn, setIsModalOn] = useState(false);

  console.log("target: " + target);

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
            <DMList setIsListOn={setIsDMListOn} setLocate={setLocate}/>
          </ListSection>
        ) : null}
        {isListOn ? (
          <ListSection>
            <JoinedList setIsListOn={setIsDMListOn} setLocate={setLocate}/>
          </ListSection>
        ) : null}
        <MainSection>
          {locate === "home" ?
            <Home
              setLocate={setLocate}
              setIsModalOn={setIsModalOn}
              /> : 
            <ChatRoom
              type={type}
              setIsInfoOn={setIsInfoOn}
              setInfoIntra={setInfoIntra} />}
        </MainSection>
        {isInfoOn ? (
          <InfoSection>
            <Info setIsInfoOn={setIsInfoOn} intra={infoIntra}/>
          </InfoSection>
        ) : null}
      </Container>
      {isModalOn ? <CreateChannel modalHandler={() => setIsModalOn(false)} /> : null}
    </Wrapper>
  );
};

export default Social;
