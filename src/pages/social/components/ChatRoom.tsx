import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import ChatInput from "./ChatInput";
import ChatCard from "./ChatCard";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "../../../context/AuthHooks";
import useSocket from "../../../context/useSocket";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Url } from "../../../constants/Global";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--dark-gray);
`;

const ChatSection = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const ChatContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--dark-gray);
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  gap: 0.5rem;
`;

export type Message = {
	nickname: string,
  isRoomInfoOn: boolean,
	intra_id: string,
  profile_url: string,
	time: string,
	chat: string,
};

const ChatRoom = ({type, isRoomInfoOn, setLocate, setJoinedUsers, setIsInfoOn, setInfoIntra}: any) => {
  const pathVar = useParams();
  const target = pathVar ? pathVar.receiver : "undefined";
  const dmPrefix = type === "dm" ? "dm-" : "";
  const bottomRef = useRef<HTMLDivElement>(null);

  const [sendMessage, setSendMessage] = useState<Message | null>();
  const [receiveMessage, setReceiveMessage] = useState<Message | null>();
  const [chatLog, setChatLog] = useState<Message[]>([]);

  const { intra, nickname, token } = useAuthState();
  const { socket } = useSocket();

  let navigate = useNavigate();

  const joinRoom = () => {
    if (socket && target) {
      console.log("emit " + dmPrefix + "join-room:" + target);
      socket.emit(dmPrefix + "join-room", {name: target});
      socket.on(dmPrefix + "messages", (data: Message[]) => {
        if (data) {
          setChatLog([...data]);
        }
      });
      scrollDown();
    } else {
      console.error("There is no socket");
    }
  }

  const leaveRoom = () => {
    if (socket && target) {
      console.log("emit " + dmPrefix + "leave-room: " + target);
      socket.emit(dmPrefix + "leave-room", {name: target});
      socket.off(dmPrefix + "messages");
    } else {
      console.error("There is no socket");
    }
    setChatLog([]);
    setIsInfoOn(false);
  }

  const forceMoveToHome = () => {
    navigate('/social/');
    setLocate("home");
  }

  useEffect(()=>{
    if (target === "undefined" || target === undefined) {
      forceMoveToHome();
    } else {
      window.addEventListener("popstate", forceMoveToHome)
  
      joinRoom();
      if (type !== "dm") {
        getJoinedUsers();
      }
      console.log("===== chat room info =====\n" + "type: " + type + "\ntarget: " + target);
    }

    return () => {
      leaveRoom();
    }
  },[target])

  const scrollDown = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 100));
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  const getJoinedUsers = async() => {
    await axios.get(Url + 'channels/users/' + target, {
      headers: {
        Authorization:"Bearer " + token
      },
    }).then(response => {
      console.log("room users: ");
      console.log(response.data);
			setJoinedUsers(response.data);
    }).catch(error => {
      console.error(target + ' room infomation loading failed');
    });
  }

  useEffect(() => {
    if (receiveMessage) {
      console.log("push");
      chatLog?.push(receiveMessage);
      console.log(chatLog);
      setReceiveMessage(null);
      scrollDown();
    }
  }, [receiveMessage]);

  useEffect(()=>{
    if (sendMessage) {
      if (socket) {
        chatLog?.push(sendMessage);
        console.log("emit " + dmPrefix + "message:" + sendMessage.chat + ", " + target);
        socket.emit(dmPrefix + "message", {msg: sendMessage.chat , receiver: target});
        scrollDown();
      } else {
        console.error("There is no socket");
      }
      setSendMessage(null);
    }
  },[sendMessage])

  useEffect(() => {
    if (socket) {
      socket.on(dmPrefix + "message", (data: Message) => {
        if (data) {
          console.log("receive: " + data);
          console.log(data);
          setReceiveMessage(data);
        }
      });
      if (type !== "dm") {
        console.log("socket on fetch");
        socket.on("fetch", () => {
          console.log("receive fetch");
          getJoinedUsers();
        });
        socket.on("kick", (name: string) => {
          console.log("receive kick " + name + ", " + target);
          if (name === target)
            forceMoveToHome();
        });
      }
      return () => {
        socket.off("fetch");
      }
    }
  }, [socket]);

  const onClickQuitRoom = () => {
    if (socket) {
      console.log("emit " + "quit-room: " + target);
      socket.emit("quit-room", {name: target});
    }
    forceMoveToHome();
  }

  const onClickRoomInfo = () => {
    setInfoIntra(undefined);
    setIsInfoOn(true);
  }

  return (
    <Container>
      <SectionHeader color="var(--purple)" title={ type === "dm" ? nickname + ", " + target : target}>
        {isRoomInfoOn ? <div onClick={onClickQuitRoom}>방 나가기</div>
          : <div onClick={onClickRoomInfo}>{":"}</div>}
      </SectionHeader>
      <ChatSection>
        <ChatContainer>
          {chatLog?.map((item: Message, index) => {
            const isMe = (item.intra_id == intra) ? true : false;
            return (
              <ChatCard
                key={index}
                isMe={isMe}
                message={item}
                setIsInfoOn={() => setIsInfoOn(true)}
                setInfoIntra={setInfoIntra}
              ></ChatCard>
            );
          })}
          <div ref={bottomRef} />
        </ChatContainer>
      </ChatSection>
      <InputSection>
        <ChatInput setUserMessage={setSendMessage}></ChatInput>
      </InputSection>
    </Container>
  );
};

export default ChatRoom;
