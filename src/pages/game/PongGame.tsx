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
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin:auto;
`;


export const PongGame = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<GameEngine>();

  // connect socket
  const {socket} = useSocket();

  if (socket !== undefined)
  {
    useEffect(() => {
      if (!canvasRef.current) return ;
      const canvas = canvasRef.current;
      setCanvas(canvas);
      setCtx(canvas.getContext("2d"));
      if (ctx !== null && canvas !== null) {
        setGame(new GameEngine(ctx, socket));
      }
    }, []);

    const [recvData, setRecvData] = useState<PongIO.GameRecvData>();
    useEffect(() => {
      socket.on("draw", (data: PongIO.GameRecvData) =>{
        setRecvData(data);
      })
      return ()=>{
        socket.off("draw");
      }
    },[]);
    
    if (ctx !== null && canvas !== null) {
      if (game === undefined) {
        setGame(new GameEngine(ctx, socket));
      }

      // draw game
      if (recvData !== undefined && recvData.ball !== undefined && game !== undefined) {
        game.draw(recvData);
      }
    } else {
      <ErrorPage/>
    }
  }
  
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
