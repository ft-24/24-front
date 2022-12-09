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
  overflow: auto;
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
	intra_id: string,
  profile_url: string,
	time: string,
	chat: string,
};

const ChatRoom = ({type, setLocate, setJoinedUsers, setIsInfoOn, setInfoIntra}: any) => {
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
    if (socket) {
      console.log("emit " + dmPrefix + "join-room:" + target);
      socket.emit(dmPrefix + "join-room", {name: target});
      socket.on(dmPrefix + "messages", (data: Message[]) => {
        if (data) {
          setChatLog([...data]);
        }
      });
      scrollDown();
    } else {
      console.log("There is no socket");
    }
  }

  const leaveRoom = async () => {
    if (socket) {
      console.log("emit " + dmPrefix + "leave-room: " + target);
      socket.emit(dmPrefix + "leave-room", {name: target});
      socket.off(dmPrefix + "messages");
    } else {
      console.log("There is no socket");
    }
  }

  const forceMoveToHome = () => {
    navigate('/social/');
    setLocate("home");
  }

  useEffect(()=>{
    if (target === "undefined")
      forceMoveToHome();

    window.addEventListener("beforeunload", () => {alert("새로고침 시 채팅방 데이터는 날아갑니다")});
    window.addEventListener("popstate", forceMoveToHome)
    joinRoom();
    console.log("===== chat room info =====\n" + "type: " + type + "\ntarget: " + target);

    return () => {
      leaveRoom();
    }
  },[target])

  const scrollDown = () => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  const getJoinedUsers = async() => {
    await axios.get(Url + 'channels/users/', {
      headers: {
        Authorization:"Bearer " + token
      },
			data: {
				room_name: target
			}
    }).then(response => {
      console.log("room users: ");
			setJoinedUsers(response.data);
    }).catch(error => {
      console.error(target + ' room infomation loading failed');
    });
  }

  useEffect(() => {
    getJoinedUsers();
  }, []);

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
        console.log("There is no socket");
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
        socket.on("patch", (nickname: string) => {
          console.log("patch: " + nickname);
        });
      }
      return () => {
        socket.off(dmPrefix + "message");
      }
    }
  }, [socket]);

  const onClickRoomInfo = () => {
    setInfoIntra(undefined);
    setIsInfoOn(true);
  }

  return (
    <Container>
      <SectionHeader color="var(--purple)" title={ type === "dm" ? nickname + ", " + target : target}>
        <div onClick={onClickRoomInfo}>{":"}</div>
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
