import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";
import UserIconButton from "./UserIconButton";

type Props = {
  isMe: boolean;
  sender?: string;
  time?: string;
  chat?: string;
  setIsInfoOn?: any;
};

const Container = styled.div<Props>`
  max-width: 70%;
  display: flex;
  flex-direction: ${(props) => (props.isMe ? `row-reverse` : `row`)};
  align-self: ${(props) => (props.isMe ? `flex-end` : `flex-start`)};
`;

const Sender = styled.div``;

const MessageContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.isMe ? `flex-end` : `flex-start`)};
  margin-left: ${(props) => (props.isMe ? `` : `1rem`)};
`;

const Message = styled.div<Props>`
  padding: 1rem;
  margin-top: 1rem;
  background: ${(props) => (props.isMe ? `var(--purple)` : `var(--white)`)};
  color: black;
  display: flex;
`;

const TimeBar = styled.div`
  margin-top: 1rem;
  align-self: flex-end;
`;

const ChatCard = ({isMe, sender, time, chat, setIsInfoOn}: Props) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const { token } = useAuthState();
  
  // 소켓 연결 되면 바꿔야 할 듯..
  const getData = async() => {
    await axios.get(Url + 'user/profile', {
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
      setImage(response.data.profile_url ?? "");
      setName(response.data.nickname ?? "");
    }).catch(error => {
      setImage('/src/images/hero.png');
      setName("undefined");
    });
  }

	useEffect(() => {
		getData();
	}, []);
  
  return (
    <Container isMe={isMe}>
      {!isMe ? (
        <Sender>
          <UserIconButton onClickButton={() => setIsInfoOn(true)} imgSrc={image} text={sender ?? "undefined"} iconSize="2.5" />
        </Sender>
      ) : null}
      <MessageContainer isMe={isMe}>
        <Message isMe={isMe}>{chat}</Message>
        <TimeBar>{time}</TimeBar>
      </MessageContainer>
    </Container>
  );
};

export default ChatCard;
