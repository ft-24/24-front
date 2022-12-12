import styled from "styled-components";
import { Message } from "./ChatRoom";
import UserIconButton from "./UserIconButton";

type Props = {
  isMe: boolean;
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
  max-width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.isMe ? `flex-end` : `flex-start`)};
  margin-left: ${(props) => (props.isMe ? `` : `1rem`)};
`;

const MessageBubble = styled.div<Props>`
  display: inline-block;
  word-break:break-all;
  max-width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: ${(props) => (props.isMe ? `var(--purple)` : `var(--white)`)};
  color: black;
  display: flex;
`;

const TimeBar = styled.div`
  max-width: 100%;
  margin-top: 1rem;
  align-self: flex-end;
`;

const ChatCard = ({isMe, message, setIsInfoOn, setInfoIntra}: {isMe: boolean, message: Message, setIsInfoOn: any, setInfoIntra: any}) => {
  const onClick = () => {
    setInfoIntra(message.intra_id);
    setIsInfoOn(true);
  }

  return (
    <Container isMe={isMe}>
      {!isMe ? (
        <Sender>
          <UserIconButton
            onClickButton={onClick}
            imgSrc={message.profile_url}
            text={message.nickname ?? "undefined"}
            iconSize="2.5" />
        </Sender>
      ) : null}
      <MessageContainer isMe={isMe}>
        <MessageBubble isMe={isMe}>{message.chat}</MessageBubble>
        <TimeBar>{message.time}</TimeBar>
      </MessageContainer>
    </Container>
  );
};

export default ChatCard;
