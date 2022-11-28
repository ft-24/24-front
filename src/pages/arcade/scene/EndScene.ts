import Scene from "../lib/Scene";
import Player from "../objects/Player";
import MenuScene from "./MenuScene";

export namespace Pong {

  export class EndScene extends Scene {

    private winner: Player;

    constructor(ctx: CanvasRenderingContext2D, winner: Player) {
      super(ctx);
      this.winner = winner;
    }

    // Bounds 'this' to the class
    private handleClick = (evt: Event) => {
      this.gameContext.loadScene(new MenuScene(this.ctx));
    }

    draw() {
      let ctx = this.ctx;
      let {width, height} = ctx.canvas;

      // Draw background
      ctx.fillStyle = '#7E8F7C';
      ctx.fillRect(0, 0, width, height);

      // == Draw text
      // Draw title
      let title = 'Game Over! - ' + this.winner.name;
      ctx.font = "60px Arial";
      ctx.fillStyle = '#FDF3E7';
      ctx.textAlign = 'center';
      ctx.fillText(title, width / 2, height / 2);

      // Draw title
      let subtitle = 'Click to go to main menu.'
      ctx.font = "24px Arial";
      ctx.textAlign = 'center';
      ctx.fillText(subtitle, width / 2, (height / 2) + 60);
    }

    update() {
    }

    getInput() {
    }

    load(params: any) {
      this.winner = <Player>params.winner;
      this.ctx.canvas.addEventListener('click', this.handleClick);
    }

    unload() {
      this.ctx.canvas.removeEventListener('click', this.handleClick);
    }
  }
}

export default Pong.EndScene;