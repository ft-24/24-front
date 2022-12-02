import {useRef, useState, useEffect} from "react";

import styled from 'styled-components';
import useSocket from "../../context/useSocket";

import ErrorPage from "../../ErrorPage";

import GameEngine from "./lib/GameEngine";
import PongIO from "./lib/IO";
import Constants from "./Constants";

const BackGround = styled.div`
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  background-image: url("/src/images/background.jpg");
`;

const GameBoard = styled.canvas`
  width : 80%;
  height : width / 2;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
`;

export const PongGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D;
  const {socket} = useSocket();
  const [game, setGame] = useState<GameEngine>();
  const [recvData, setRecvData] = useState<PongIO.GameRecvData>();

  useEffect(() => {
    if (socket && canvasRef.current) {
      const ref = canvasRef.current.getContext("2d");
      if (ref !== null) {
        ctx = ref;
        setGame(new GameEngine(ctx, socket));
      }
    }
  }, [canvasRef.current, socket]);


  useEffect(() => {
    if (socket) {
      socket.on("draw", (data: PongIO.GameRecvData) => {
        if (data) {
          setRecvData(data);
        }
      })
      return () => {
        socket.off("draw");
      }
    }
  }, [socket]);

  useEffect(() => {
    if (game && recvData) {
      game.draw(recvData);
    }
  }, [game, recvData]);
  
  return (
    <>
      <GameBoard ref={canvasRef} width={Constants.Game.CANVAS_WIDTH} height={Constants.Game.CANVAS_HEIGHT}></GameBoard>
    </>
  );
}

const GamePage = () => {
  return (
    <BackGround>
      <PongGame />
    </BackGround>
  );
}

export default GamePage;
