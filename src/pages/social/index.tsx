import styled from "styled-components";
import Nav from "./components/Nav";
import UserInfo from "./components/UserInfo";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import JoinedList from "./components/JoinedList";
import { useEffect, useState } from "react";
import DMList from "./components/DMList";
import { useParams } from "react-router-dom";
import CreateChannel from "../../components/modals/CreateChannel";
import useSocket from "../../context/useSocket";
import RoomInfo from "./components/RoomInfo";
import PasswordInput from "../../components/modals/PasswordInput";
import { SimpleUserInfo } from "./components/SimpleUserInfo";

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
  const [target, setTarget] = useState<string | undefined>(pathVar ? pathVar.receiver : undefined);

  const [locate, setLocate] = useState(target ? "chat" : "home");
  const [type, setType] = useState("dm");
  const [infoIntra, setInfoIntra] = useState<string | undefined>(undefined);
  const [joinedUsers, setJoinedUsers] = useState<SimpleUserInfo[]>([]);

  const [isInfoOn, setIsInfoOn] = useState(false);
  const [isListOn, setIsListOn] = useState(false);
  const [isDMListOn, setIsDMListOn] = useState(false);
	const [isCreateModalOn, setIsCreateModalOn] = useState(false);
	const [isPasswordModalOn, setIsPasswordModalOn] = useState(false);

  useEffect(() => {
    setLocate(target || target === "" ? "chat" : "home");
    setIsCreateModalOn(false);
  }, [target])

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
            <DMList setIsListOn={setIsDMListOn} setLocate={setLocate} setType={setType} />
          </ListSection>
        ) : null}
        {isListOn ? (
          <ListSection>
            <JoinedList setIsListOn={setIsListOn} setLocate={setLocate} setType={setType} setTarget={setTarget} setIsPasswordModalOn={setIsPasswordModalOn} />
          </ListSection>
        ) : null}
        <MainSection>
          {locate === "home" ?
            <Home
              setIsCreateModalOn={setIsCreateModalOn}
              setIsPasswordModalOn={setIsPasswordModalOn}
              setLocate={setLocate}
              setType={setType}
              setTarget={setTarget}
              /> : 
            <ChatRoom
              type={type}
              setLocate={setLocate}
              setJoinedUsers={setJoinedUsers}
              setIsInfoOn={setIsInfoOn}
              setInfoIntra={setInfoIntra} />}
        </MainSection>
        {isInfoOn ? (
          <InfoSection>
            {infoIntra !== undefined ?
              <UserInfo
                setIsInfoOn={setIsInfoOn}
                userIntra={infoIntra ?? "undefined"}
                joinedUsers={joinedUsers} />
              : <RoomInfo 
                  setIsInfoOn={setIsInfoOn}
                  setInfoIntra={setInfoIntra}
                  joinedUsers={joinedUsers}
                  roomName={target ?? "undefined"} />
            }
          </InfoSection>
        ) : null }
      </Container>
      {isCreateModalOn ? <CreateChannel
                            modalHandler={() => setIsCreateModalOn(false)}
                            setType={setType}
                            setTarget={setTarget}
                            /> : null}
      {isPasswordModalOn  ? <PasswordInput
                              modalHandler={() => setIsPasswordModalOn(false)}
                              title={target}
                              moveToChat={() => {
                                            setLocate("chat");
                                            setType("protected");
                                            setTarget(target);
                                          }}
                            /> : null}
    </Wrapper>
  );
};

export default Social;
