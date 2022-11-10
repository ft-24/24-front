import { filterProps } from "framer-motion";
import {useRef, useState, useEffect} from "react";
import styled from 'styled-components';

import ErrorPage from "../../ErrorPage";

import Constants from "./Constants";
import GameEngine from "./lib/GameEngine";

const GameBoard = styled.canvas`
  width: 1200px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left:-600px;
  margin-top:-300px;
`;

const PongGame = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return ;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext("2d"));
  }, [])

  if (ctx !== null) {
    let game = new GameEngine(ctx);

    setInterval(() => {
      game.getInput();
      game.update();
      game.draw();
    }, 1000 / Constants.Game.FPS / 2);
  } else {
    <ErrorPage/>
  }


  return (
    <>
      <GameBoard ref={canvasRef} width={1200} height={600}></GameBoard>
    </>
  );
}

const GamePage = () => {

  return (
    <PongGame/>
  );
}

export default GamePage;
