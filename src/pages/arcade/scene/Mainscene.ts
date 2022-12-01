import Scene from "../lib/Scene"
import Constants from "../Constants"
import Ball from "../objects/Ball";
import HumanPlayer from "../objects/HumanPlayer"
import EndScene from "./EndScene";
import GraphicalElement from "../lib/GraphicalElement";
import Enemy from "../objects/Enemy";

namespace Pong {
  export class MainScene extends Scene {

    private playerPadding = Constants.Game.PLAYER_PADDING;
    private score: string;
    private ball: Ball;
    private player1: HumanPlayer;
    private player2: Enemy;
    private winningScore = Constants.Game.WINNING_SCORE;

    private objectsInScene: Array<GraphicalElement> = [];

    constructor(ctx: CanvasRenderingContext2D) {
      super(ctx);
      let {width, height} = ctx.canvas;
      let centerH = width / 2;
      let centerV = height / 2;

      // Position objects
      this.score = "";
      this.ball = new Ball(centerH, centerV);
      
      this.player1 = new HumanPlayer(this.playerPadding,
                            centerV, this.ball);

      let player2Offset = ctx.canvas.width
                            - (Constants.Game.ENEMY_PADDING + Constants.Game.ENEMY_WIDTH)
      this.player2 = new Enemy(player2Offset, 0, this.ball);

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

    private drawScores(ctx: CanvasRenderingContext2D) {
      // Useful variables
      let {width, height} = ctx.canvas;

      ctx.font = `${Constants.Text.SCORE_SIZE} ${Constants.Text.SCORE_FONT}`;
      ctx.fillStyle = Constants.Colours.SCORE_COLOUR;
      ctx.textAlign = "center";
      ctx.fillText(this.ball.getScore(), width / 2, height / 2);
    }

    getInput() {

    }

    draw() {
      let ctx = this.ctx;
      this.drawBackground(ctx);
      this.drawScores(ctx);
      this.objectsInScene.forEach(object => object.draw(this.ctx));
    }

    load() {
      this.player1.bind();
    }

    unload() {
      this.player1.unbind();
    }

    update() {
      this.score = this.ball.getScore();
      if (this.ball.isDestroyed()) {
        if (this.ball.x <= 0) {
          this.gameContext.loadScene(new EndScene(this.ctx, this.score));
        }
        this.ball.restart();
      } else {
        // Draw remaining objects
        this.objectsInScene.forEach(object => object.update(this.ctx));
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