import styled from "styled-components";
import Avatar from "../../../components/Avatar";

type Props = {
  isMe: boolean;
  sender?: string;
  time?: string;
  chat?: string;
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

const ChatCard = ({ isMe, sender, time, chat }: Props) => {
  return (
    <Container isMe={isMe}>
      {!isMe ? (
        <Sender>
          <Avatar.txt>{sender}</Avatar.txt>
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
