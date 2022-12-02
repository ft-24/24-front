import {useRef, useState, useEffect} from "react";
import styled from 'styled-components';

import ErrorPage from "../../ErrorPage";

import Constants from "./Constants";
import GameEngine from "./lib/GameEngine";

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


const ArcadeGame2 = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<GameEngine>();

  useEffect(() => {
    if (!canvasRef.current) return ;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext("2d"));
    if (ctx !== null && canvas !== null) {
      setGame(new GameEngine(ctx));
    }
  }, [])

  if (ctx !== null && game === undefined) {
    setGame(new GameEngine(ctx));
  }
  if (ctx !== null && game !== undefined) {
    const callback = () => {
      game.getInput();
      game.update();
      game.draw();
      requestAnimationFrame(callback);
    };
    requestAnimationFrame(callback);
  } else {
    <ErrorPage/>
  }


  return (
    <>
      <GameBoard ref={canvasRef} width={Constants.Game.CANVAS_WIDTH} height={Constants.Game.CANVAS_HEIGHT}></GameBoard>
    </>
  );
}

const ArcadeGamePage2 = () => {

  return (
    <BackGround>
      <ArcadeGame2/>
    </BackGround>
  );
}

export default ArcadeGamePage2;