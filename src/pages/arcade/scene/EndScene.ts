import Scene from "../lib/Scene";
import MenuScene from "./MenuScene";
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
      await axios.put(Url + 'user/profile/arcade', {
        arcade: score
      }, {
            headers: {
              Authorization:"Bearer " + this.token
            }
      }).then (response => {
        console.log("set arcade score: " + response.status);
      }).catch (error => {
        alert('score update failed');
      });
    }

    draw() {
      let ctx = this.ctx;
      let {width, height} = ctx.canvas;

      // Draw background
      ctx.fillStyle = '#7E8F7C';
      ctx.fillRect(0, 0, width, height);

      // == Draw text
      // Draw title
      let title = 'Score : ' + this.score;
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
      this.ctx.canvas.addEventListener('click', this.handleClick);
    }

    unload() {
      this.ctx.canvas.removeEventListener('click', this.handleClick);
    }
  }
}

export default Pong.EndScene;