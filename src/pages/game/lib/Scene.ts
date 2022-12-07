import GameEngine from "./GameEngine";
import { Socket } from 'socket.io-client';
import PongIO from "./IO";

namespace Pong {

  export abstract class Scene {

    constructor(protected ctx: CanvasRenderingContext2D, protected socket: Socket) {}

    protected gameContext!: GameEngine;

    public sceneNum!: number;

    // Must be implemented
    abstract draw(recvData: PongIO.GameRecvData): void;
    abstract update(): void;
    abstract getInput(): void;

    // Optionally implement
    // Can optionally be given parameters
    load(params: object): void {}
    unload(): void {}

    setGameContext(game: GameEngine) {
      this.gameContext = game;
    }
  }
}

export default Pong.Scene;
