import Constants from "../Constants";
import Ball from "./Ball";
import Utils from "../lib/Utils";
import { Direction } from "../lib/Directions";
import GraphicalElement from "../lib/GraphicalElement";
import PongIO from "../lib/IO";

export namespace Pong {

  export class Player implements GraphicalElement {

    protected direction: Direction = Direction.NONE;
    protected speed = Constants.Game.PADDLE_SPEED;
    protected colour;
    protected score = 0;

    protected startX: number;
    protected startY: number;

    public num = 0;
    public paddleWidth = Constants.Game.PADDLE_WIDTH;
    public paddleHeight = Constants.Game.PADDLE_HEIGHT;
    public name = 'Unknown Player';

    constructor(public n: number, public x: number, public y: number, public ball: Ball, public color: any) {
      this.num = n;
      this.startX = x;
      this.startY = y;
      this.colour = color;
    }

    getScore() {
      return this.score;
    }

    givePoint() {
      this.score += 1;
    }

    resetScore() {
      this.score = 0;
    }

    getInput() {

    }

    update() {
      if (this.direction !== null) {
        switch (this.direction) {
          case Direction.UP:
            this.y -= this.speed;
            break;
          case Direction.DOWN:
            this.y += this.speed;
        }
      }

      let maxY = Constants.Game.CANVAS_HEIGHT - this.paddleHeight;
      if (this.y < 0) {
        this.y = 0;
      } else if (this.y > maxY) {
        this.y = maxY;
      }

      if (Utils.between(this.ball.y, this.y, this.y + this.paddleHeight)
          && Utils.between(this.ball.x, this.x, this.x + this.paddleWidth)) {
        this.ball.hit();
      }
    }

    draw(ctx: CanvasRenderingContext2D, recvData: PongIO.GameRecvData) {
      ctx.fillStyle = this.colour;
      if (this.num == 1) {
        const pdata = recvData.p1;
        ctx.fillRect(pdata.x, pdata.y, this.paddleWidth, this.paddleHeight);
      } else {
        const pdata = recvData.p2;
        ctx.fillRect(pdata.x, pdata.y, this.paddleWidth, this.paddleHeight);
      }
      
    }
  }
}

export default Pong.Player;
