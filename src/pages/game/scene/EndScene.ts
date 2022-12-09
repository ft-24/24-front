import { Socket } from "socket.io-client";
import Scene from "../lib/Scene";
import Mainscene from "./Mainscene";
import Constants from "../Constants";
import PongIO from "../lib/IO";

export namespace Pong {

  export class EndScene extends Scene {

    public readonly sceneNum = 1;

    private result: PongIO.ResultData;

    constructor(ctx: CanvasRenderingContext2D, socket:Socket, result: PongIO.ResultData) {
      console.log("endscene loaded");
      super(ctx, socket);
      this.sceneNum = 1;
      this.result = result;
      this.draw();
    }

    // Bounds 'this' to the class
    private handleClick = (evt: Event) => {
      this.gameContext.loadScene(new Mainscene(this.ctx, this.socket));
    }

    draw() {
      let ctx = this.ctx;
      let {width, height} = ctx.canvas;

      // Draw background
      ctx.fillStyle = Constants.Colours.MENU_BACKGROUND;
      ctx.fillRect(0, 0, width, height);

      // == Draw text
      // Draw title
      let title: string = "";
      if (this.result.win === 1) {
        title += this.result.p1;
      } else {
        title += this.result.p2;
      }
      title += " Win!!";
      ctx.font = Constants.Text.TITLE_SIZE + " " + Constants.Text.TITLE_FONT;
      ctx.fillStyle = '#FDF3E7';
      ctx.textAlign = 'center';
      ctx.fillText(title, width / 2, (height / 2) - 60);

      // Draw title
      let subtitle = this.result.p1_score + "  :  " + this.result.p2_score; 
      ctx.font = Constants.Text.RES_SUBTITLE_SIZE + " " + Constants.Text.SUBTITLE_FONT;
      ctx.textAlign = 'center';
      ctx.fillText(subtitle, width / 2, (height / 2));

      // Draw title
      let subtitle2 = 'Click to go to main menu.'
      ctx.font = Constants.Text.RES_SUBTITLE_SIZE + " " + Constants.Text.SUBTITLE_FONT;
      ctx.textAlign = 'center';
      ctx.fillText(subtitle2, width / 2, (height / 2) + 60);
    }

    update() {
    }

    getInput() {
    }

    load() {
      this.ctx.canvas.addEventListener('click', this.handleClick);
    }

    unload() {
      this.ctx.canvas.removeEventListener('click', this.handleClick);
    }
  }
}

export default Pong.EndScene;
