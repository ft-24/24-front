import { Dispatch, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQueueDispatch, useQueueState } from "../../context/QueueHooks";
import useSocket from "../../context/useSocket";
import { GameRoomInfo } from "../lobby/components/GameRoomInfo";
import ImageCard from "./ImageCard";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/src/images/background.jpg");
`;

const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: none;
  white-space: nowrap;
  background: var(--dark-gray);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Home = () => {
  const queueDispatch = useQueueDispatch();
  const {socket} = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      socket.on("enter-room", (data: GameRoomInfo) => {
        if (data) {
          queueDispatch({type:"ENTER", payload:data.id});
          queueDispatch({type:"UPDATE", payload:data});
          navigate('/game');
        }
      })
      return () => {
        socket.off("enter-room");
      }
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("invite", (data: GameRoomInfo) => {
        if (data) {
          queueDispatch({type:"GETQUEUE", payload:data.id});
        }
      })
      return () => {
        socket.off("invite");
      }
    }
  }, [socket]);

  const inQueue = () => {
    queueDispatch({type:"INQUEUE"});
    socket?.emit('queue');
    console.log("start matching...");
  }

	return (
		<Layout>
			<Wrapper>
        <ImageCard text={"Private"} imagePath={"/images/lock.png"} imagePadding="15px" routePath={"/private"}/>
        <ImageCard text={"Public"} imagePath={"/images/earth.png"} imagePadding="25px" routePath={"/lobby"}/>
        <ImageCard text={"Arcade"} imagePath={"/images/controller.png"} imagePadding="15px" routePath={"/arcade"}/>
        <ImageCard text={"Ladder"} imagePath={"/images/trophy.png"} imagePadding="15px"
        onClickHandler={inQueue}/>
        <ImageCard text={"Social"} imagePath={"/images/chat.png"} imagePadding="20px" routePath={"/social"}/>
			</Wrapper>
		</Layout>
	)
}

export default Home;
