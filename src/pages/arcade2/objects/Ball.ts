import Constants from "../Constants";
import GraphicalElement from "../lib/GraphicalElement";

export namespace Pong {

  export class Ball implements GraphicalElement {

    private startTime;

    private speed = Constants.Game.BALL_SPEED;
    private size = Constants.Game.BALL_SIZE;

    private destroyed = false;

    private startX: number;
    private startY: number;

    private colour = Constants.Colours.BALL_COLOUR;

    public dx = 0;
    public dy = 0;

    constructor(public x = Constants.Game.CANVAS_WIDTH / 2, public y = Constants.Game.CANVAS_HEIGHT / 2) {
      this.startX = x;
      this.startY = y;
      this.startTime = 0;

      this.start();
    }

    isDestroyed() {
      return this.destroyed;
    }

    draw(ctx: CanvasRenderingContext2D) {
      if (!this.destroyed && ctx !== null) {
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.colour;
        ctx.fill();
      }
    }

    update(ctx: CanvasRenderingContext2D) {
      if (ctx !== undefined) {
        let maxY = ctx.canvas.height;

        // ball moving
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;

        // ball hit wall
        if (this.x <= 0) {
          this.destroyed = true;
          this.dx = 0;
          this.dy = 0;
        }

        if (this.y >= maxY || this.y <= 0) {
          this.dy = -this.dy;
          this.speed = this.speed * 1.05;
          if (this.y >= maxY) {
            this.y = maxY;
          } else {
            this.y = 0;
          }
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
        const rand = Date.now() % 10;
        if (rand >= 5) {
          this.dx = -this.dx;
        }
        if (rand >= 8 || rand <= 2) {
          this.dy = -this.dy;
        }
      }, 2000)
      this.startTime = Date.now();
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

    getScore(): string {
      let res = (Date.now() - this.startTime) / 1000 - 2;
      if (res < 0) {
        res = 0.00000;
      }
      return (res.toFixed(2));
    }
  }
}

export default Pong.Ball;