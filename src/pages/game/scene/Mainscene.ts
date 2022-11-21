import Scene from "../lib/Scene"
import Constants from "../Constants"
import Ball from "../objects/Ball";
import Player from "../objects/Player";
import HumanPlayer from "../objects/HumanPlayer"
import EndScene from "./EndScene";
import GraphicalElement from "../lib/GraphicalElement"
import { Socket } from 'socket.io-client';
import PongIO from "../lib/IO";
import { Direction } from "../lib/Directions";
import { useEffect, useState } from "react";

namespace Pong {
  export class MainScene extends Scene {

    private playerPadding = Constants.Game.PLAYER_PADDING;
    private input: PongIO.Input;
    private prevInput: Direction = Direction.NONE;
    private ball: Ball;
    private player1: Player;
    private player2: Player;
    private winningScore = Constants.Game.WINNING_SCORE;

    private objectsInScene: Array<GraphicalElement> = [];

    constructor(ctx: CanvasRenderingContext2D, socket: Socket) {
      super(ctx, socket);
      let {width, height} = ctx.canvas;
      let centerH = width / 2;
      let centerV = height / 2;

      // IO object
      this.input = new PongIO.Input(Direction.NONE, socket);
      // Position objects
      this.ball = new Ball(centerH, centerV);
      this.player1 = new Player(1, this.playerPadding, centerV, this.ball);

      let player2Offset = ctx.canvas.width
                            - (this.playerPadding + this.player1.paddleWidth)
      this.player2 = new Player(2, player2Offset, centerV, this.ball);

      this.objectsInScene.push(this.player1);
      this.objectsInScene.push(this.player2);
      this.objectsInScene.push(this.ball);
    }

    private drawBackground(ctx: CanvasRenderingContext2D) {

      // Useful variables
      let {width, height} = ctx.canvas;
      let middle = ctx.canvas.width / 2;

      // Draw background
      ctx.fillStyle = Constants.Colours.GAME_BACKGROUND;
      ctx.fillRect(0, 0, width, height)

      // Draw pitch
      ctx.beginPath();
      ctx.strokeStyle = Constants.Colours.PITCH_COLOUR;
      ctx.setLineDash([5, 15]);
      ctx.moveTo(middle, 0);
      ctx.lineTo(middle, ctx.canvas.height);
      ctx.stroke();
      ctx.closePath();
    }

    private drawScores(ctx: CanvasRenderingContext2D, recvData: PongIO.GameRecvData) {
      // Useful variables
      let {width, height} = ctx.canvas;

      ctx.font = `${Constants.Text.SCORE_SIZE} ${Constants.Text.SCORE_FONT}`;
      ctx.fillStyle = Constants.Colours.SCORE_COLOUR;
      ctx.fillText(recvData.score.p1.toString(), width / 4, height / 2);
      ctx.fillText(recvData.score.p2.toString(), 3 * (width / 4), height / 2);
    }

    getInput() {
    }

    draw(recvData: PongIO.GameRecvData) {
      let ctx = this.ctx;

      this.drawBackground(ctx);
      if (recvData !== undefined) {
        this.drawScores(ctx, recvData);
        this.objectsInScene.forEach(object => object.draw(this.ctx, recvData));
      }
      
    }

    load() {
      this.input.bind();
    }

    unload() {
      this.input.unbind();
    }

    update(deltaTime: number) {
      if (this.ball.isDestroyed()) {
        if (this.ball.x <= 0) {
          this.player2.givePoint();
        } else {
          this.player1.givePoint();
        }
        this.ball.restart();
      }

      if (this.player1.getScore() >= this.winningScore) {
        this.gameContext.loadScene(new EndScene(this.ctx, this.socket, this.player1), { winner: this.player1 });
      } else if (this.player2.getScore() >= this.winningScore) {
        this.gameContext.loadScene(new EndScene(this.ctx, this.socket, this.player2), { winner: this.player2 });
      } else {
        // Draw remaining objects
        this.objectsInScene.forEach(object => object.update(deltaTime));
      }
    }

    restart() {
      this.player1.resetScore();
      this.player2.resetScore();
      this.ball.restart();
    }

  }
}

export default Pong.MainScene;
