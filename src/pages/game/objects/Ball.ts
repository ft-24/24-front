import Constants from "../Constants";
import GraphicalElement from "../lib/GraphicalElement";
import PongIO from "../lib/IO";

export namespace Pong {

  export class Ball implements GraphicalElement {

    private speed = Constants.Game.BALL_SPEED;
    private size = Constants.Game.BALL_SIZE;

    private destroyed = false;

    private startX: number;
    private startY: number;

    private colour = Constants.Colours.BALL_COLOUR;

    public dx = 0;
    public dy = 0;

    constructor(public x = 0, public y = 0) {
      this.startX = x;
      this.startY = y;

      this.start();
    }

    isDestroyed() {
      return this.destroyed;
    }

    draw(ctx: CanvasRenderingContext2D, recvData: PongIO.GameRecvData) {
      if (!this.destroyed && ctx !== null) {
        const bdata = recvData.ball;
        ctx.arc(bdata.x, bdata.y, this.size, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
      }
    }

    update() {
      let maxX: number = Constants.Game.CANVAS_WIDTH;
      let maxY: number = Constants.Game.CANVAS_HEIGHT;

      // ball moving
      this.x += this.dx * this.speed;
      this.y += this.dy * this.speed;

      // ball hit wall
      if (this.x >= maxX || this.x <= 0) {
        this.destroyed = true;
        this.dx = 0;
        this.dy = 0;
      }

      if (this.y >= maxY || this.y <= 0) {
        this.dy = -this.dy;
        if (this.y >= maxY) {
          this.y = maxY;
        } else {
          this.y = 0;
        }
      }
    }

    start() {
      this.x = this.startX;
      this.y = this.startY;

      setTimeout(() => {
        this.dx = 3;
        this.dy = 2;

        // 5050 chance of direction
        if (Math.random() > 0.5) {
          this.dx = -this.dx;
        }
      }, 2000)
    }

    restart() {
      this.destroyed = false;
      this.dx = 0;
      this.dy = 0;
      this.start();
    }

    hit() {
      this.dx = -this.dx;
    }
  }
}

export default Pong.Ball;
