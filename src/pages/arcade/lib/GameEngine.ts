import Utils from './Utils';
import Scene from './Scene';
import MainScene from '../scene/Mainscene';
import MenuScene from '../scene/MenuScene';

namespace Pong {

  export class GameEngine {

    private scene!: Scene;

    constructor(private ctx: CanvasRenderingContext2D) {
      let menu = new MenuScene(ctx);
      this.loadScene(menu);
    }

    draw() {
      // Clear ready for next render
      Utils.clearScreen(this.ctx);
      this.scene.draw();
    }

    update() {
      this.scene.update();
    }

    getInput() {
      this.scene.getInput();
    }

    loadScene(newScene: Scene, params?: object) {
      // If a scene has been loaded already, unload it
      if (this.scene) {
        this.scene.unload();
      }
      this.scene = newScene;
      this.scene.setGameContext(this);

      if (params === undefined) {
        params = {};
      }

      this.scene.load(params);
    }
  }

}

export default Pong.GameEngine;