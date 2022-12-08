import Utils from './Utils';
import Scene from './Scene';
import MainScene from '../scene/Mainscene';
import {Socket} from 'socket.io-client';
import PongIO from './IO';

namespace Pong {

  export class GameEngine {

    private scene!: Scene;

    constructor(private ctx: CanvasRenderingContext2D, private socket: Socket) {
      let menu = new MainScene(ctx, socket);
      this.loadScene(menu);
    }

    draw(recvData: PongIO.GameRecvData) {
      // Clear ready for next render
      Utils.clearScreen(this.ctx);
      this.scene.draw(recvData);
    }

    update() {
      this.scene.update();
    }

    getSceneNum(): number {
      return this.scene.getSceneNum();
    }

    getInput() {
      this.scene.getInput();
    }

    unload() {
      this.scene.unload();
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
