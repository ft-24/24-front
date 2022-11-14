import {useRef, useState, useEffect } from "react";
import styled from 'styled-components';

import ErrorPage from "../../ErrorPage";

import GameEngine from "./lib/GameEngine";
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

const PongGame = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return ;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext("2d"));
  }, []);

  if (ctx !== null && canvas !== null) {
    let game = new GameEngine(ctx);
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    let startTime: number = Date.now();
    const callback = (timestamp: number) => {
      let deltaTime = (timestamp - startTime) * 0.06;

      game.getInput();
      game.update(deltaTime);
      game.draw();

      startTime = timestamp;
      requestAnimationFrame(callback);
    };
    requestAnimationFrame(callback);
  } else {
    <ErrorPage/>
  }

  return (
      <GameBoard ref={canvasRef} width={Constants.Game.CANVAS_WIDTH} height={Constants.Game.CANVAS_HEIGHT}></GameBoard>
  );
}

const GamePage = () => {

  return (
    <BackGround>
      <PongGame/>
    </BackGround>
  );
}

export default GamePage;
