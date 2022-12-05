import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader";
import ChatInput from "./ChatInput";
import ChatCard from "./ChatCard";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "../../../context/AuthHooks";
import useSocket from "../../../context/useSocket";
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

const DummyMessages: Message[] = [
  {
    nickname: "other",
    intra_id: "other",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:11",
    chat: "테스트",
  },
  {
    nickname: "young-ch",
    intra_id: "young-ch",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:12",
    chat: "테스트",
  },
  {
    nickname: "young-ch",
    intra_id: "young-ch",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:12",
    chat: "테스트",
  },
  {
    nickname: "young-ch",
    intra_id: "young-ch",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:12",
    chat: "테스트",
  },
  {
    nickname: "other",
    intra_id: "other",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:13",
    chat: "테스트",
  },
  {
    nickname: "other",
    intra_id: "other",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:14",
    chat: "테스트",
  },
  {
    nickname: "other",
    intra_id: "other",
    profile_url: "/src/images/hero.png",
    time: "2022-11-11 11:14",
    chat: "테스트",
  },
];

const ChatRoom = ({receiver, setIsInfoOn, setInfoIntra}: {receiver: string, setIsInfoOn: any, setInfoIntra: any}) => {
  const [sendMessage, setSendMessage] = useState<Message | null>();
  const [receiveMessage, setReceiveMessage] = useState<Message | null>();
  const lastChat = useRef<HTMLDivElement>(null);
  const [chatLog, setChatLog] = useState<Message[]>();

  const state = useAuthState();
  const { socket } = useSocket();
  const { token } = useAuthState();

  const getChatLog = async () => {
    await axios.get(Url + 'user/profile', {
      headers: {
        Authorization:"Bearer " + token
      }, 
      timeout: 1000,
    }).then(response => {
      const data: Message[] = response.data;
      setChatLog([...data]);
    }).catch(error => {
      console.error('message log loading failed');
      setChatLog([...DummyMessages]);
    });
  }

  useEffect(()=>{
    getChatLog();
  },[])

  const scrollDown = () => {
    lastChat?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }

  useEffect(() => {
    if (receiveMessage) {
      scrollDown();
      chatLog?.push(receiveMessage);
      setReceiveMessage(null);
    }
  }, [receiveMessage]);

  useEffect(()=>{
    if (sendMessage) {
      scrollDown();
      if (socket) {
        console.log("emit message:" + sendMessage.chat + ", " + 'young-ch');
        socket.emit("dm-message", {msg: sendMessage.chat , nickname: 'young-ch'});
      } else {
        console.log("There is no socket");
      }
      setSendMessage(null);
    }
  },[sendMessage])

  useEffect(() => {
    if (socket) {
      socket.on("dm-message", (data: Message) => {
        if (data) {
          console.log("receive");
          console.log(data);
          setReceiveMessage(data);
        }
      })
      return () => {
        socket.off("dm-message");
      }
    }
  }, [socket]);

  return (
    <Container>
      <SectionHeader color="var(--purple)" title={state.nickname + ", " + receiver}>
        <div onClick={() => setIsInfoOn(true)}>{":"}</div>
      </SectionHeader>
      <ChatSection>
        <ChatContainer ref={lastChat}>
          {chatLog?.map((item: Message, index) => {
            const isMe = (item.intra_id == state.intra) ? true : false;
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
        </ChatContainer>
      </ChatSection>
      <InputSection>
        <ChatInput setUserMessage={setSendMessage}></ChatInput>
      </InputSection>
    </Container>
  );
};

export default ChatRoom;
