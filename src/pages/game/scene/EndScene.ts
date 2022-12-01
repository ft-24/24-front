import { Socket } from "socket.io-client";
import Scene from "../lib/Scene";
import Player from "../objects/Player";
import MenuScene from "./MenuScene";
import Constants from "../Constants";

export namespace Pong {

  export class EndScene extends Scene {

    private winner: Player;

    constructor(ctx: CanvasRenderingContext2D, socket:Socket, winner: Player) {
      super(ctx, socket);
      this.winner = winner;
    }

    // Bounds 'this' to the class
    private handleClick = (evt: Event) => {
      this.gameContext.loadScene(new MenuScene(this.ctx, this.socket));
    }

    draw() {
      let ctx = this.ctx;
      let {width, height} = ctx.canvas;

      // Draw background
      ctx.fillStyle = Constants.Colours.MENU_BACKGROUND;
      ctx.fillRect(0, 0, width, height);

      // == Draw text
      // Draw title
      let title = 'Game Over! - ' + this.winner.name;
      ctx.font = Constants.Text.TITLE_SIZE + " " + Constants.Text.TITLE_FONT;
      ctx.fillStyle = '#FDF3E7';
      ctx.textAlign = 'center';
      ctx.fillText(title, width / 2, height / 2);

      // Draw title
      let subtitle = 'Click to go to main menu.'
      ctx.font = Constants.Text.RES_SUBTITLE_SIZE + " " + Constants.Text.SUBTITLE_FONT;
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
