import Scene from "../lib/Scene";
import MenuScene from "./MenuScene";
import Constants from "../Constants";

import axios from "axios";

import { Url } from "../../../constants/Global";

export namespace Pong {

  export class EndScene extends Scene {

    private score: string;
    //const { token } = useAuthState();
    private token: string | null;
    

    constructor(ctx: CanvasRenderingContext2D, score: string) {
      super(ctx);
      this.score = score;
      this.token = localStorage.getItem('token');
      
      this.setArcadeScore(score);
    }

    private handleClick = (evt: Event) => {
      this.gameContext.loadScene(new MenuScene(this.ctx));
    }

    private setArcadeScore = async (score: string) => {
      await axios.put(Url + 'user/profile', {
        arcade: score
      }, {
            headers: {
              Authorization:"Bearer " + this.token
            }
      }).then (response => {
        
      }).catch (error => {
        console.error('score update failed');
      });
    }

    draw() {
      let ctx = this.ctx;
      let {width, height} = ctx.canvas;

      // Draw background
      ctx.fillStyle = Constants.Colours.MENU_BACKGROUND;
      ctx.fillRect(0, 0, width, height);

      // == Draw text
      // Draw title
      let title = 'Score : ' + this.score;
      ctx.font = Constants.Text.TITLE_SIZE + " " + Constants.Text.TITLE_FONT;
      ctx.fillStyle = '#FDF3E7';
      ctx.textAlign = 'center';
      ctx.fillText(title, width / 2, height / 2);

      // Draw title
      let subtitle = 'Click to play again...'
      ctx.font = Constants.Text.RES_SUBTITLE_SIZE + " " + Constants.Text.SUBTITLE_FONT;
      ctx.textAlign = 'center';
      ctx.fillText(subtitle, width / 2, (height / 2) + 60);
    }

    update() {
    }

    getInput() {
    }

    load(params: any) {
      this.ctx.canvas.addEventListener('click', this.handleClick);
    }

    unload() {
      this.ctx.canvas.removeEventListener('click', this.handleClick);
    }
  }
}

export default Pong.EndScene;