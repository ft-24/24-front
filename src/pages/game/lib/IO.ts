import {Direction} from './Directions'
import Utils from "../lib/Utils";
import { Socket } from 'socket.io-client';

namespace PongIO {

  export interface GameSendData {
    direction: Direction;
  }

  interface VectorData {
    x: number;
    y: number;
  }

  interface ScoreData {
    p1: number;
    p2: number;
  }

  export interface GameRecvData {
    p1: VectorData;
    p2: VectorData;
    ball: VectorData;
    score: ScoreData;
  }

  export interface ResultData {
    p1: string;
    p2: string;
    win: number;
    p1_score: number;
    p2_score: number;
  }

  export class Input {
    public prevDir: Direction;
    public direction: Direction;

    constructor(dir: Direction, private socket: Socket) {
      this.prevDir = dir;
      this.direction = dir; 
    }

    private handleKeydown = (evt: KeyboardEvent) => {
      switch (evt.key) {
        case Utils.KeyCode.UP_ARROW:
          this.direction = Direction.UP;
          break;
        case Utils.KeyCode.DOWN_ARROW:
          this.direction = Direction.DOWN;
          break;
        default:
          this.direction = Direction.NONE;
      }
      if (this.direction !== this.prevDir) {
        this.socket.emit("move", this.direction);
        this.prevDir = this.direction;
      }
    };

    private handleKeyup = (_: KeyboardEvent) => {
      if (this.direction !== Direction.NONE) {
        this.direction = Direction.NONE;
        this.socket.emit("move", this.direction);
        this.prevDir = this.direction;
      }
    };

    bind() {
      window.addEventListener('keydown', this.handleKeydown);
      window.addEventListener('keyup', this.handleKeyup);
    }

    unbind() {
      window.removeEventListener('keydown', this.handleKeydown);
      window.removeEventListener('keyup', this.handleKeyup);
    }
  }
}

export default PongIO;