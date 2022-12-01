import Constants from "../Constants";
import Ball from "./Ball";
import Utils from "../lib/Utils";
import { Direction } from "../lib/Directions";
import GraphicalElement from "../lib/GraphicalElement";

export namespace Pong {

  export class Enemy implements GraphicalElement {
    protected colour = Constants.Colours.PADDLE2_COLOUR;
    protected score = 0;

    protected startX: number;
    protected startY: number;

    public paddleWidth = Constants.Game.ENEMY_WIDTH;
    public paddleHeight = Constants.Game.ENEMY_HEIGHT;
    public name = 'Unknown Enemy';

    constructor(public x: number, public y: number, public ball: Ball) {
      this.startX = x;
      this.startY = y;
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

    update(ctx: CanvasRenderingContext2D) {
      if (Utils.between(this.ball.y, this.y, this.y + this.paddleHeight)
          && Utils.between(this.ball.x, this.x, this.x + this.paddleWidth)) {
        this.ball.hit();
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.colour;
      ctx.fillRect(this.x, this.y, this.paddleWidth, this.paddleHeight);
    }
  }
}

export default Pong.Enemy;