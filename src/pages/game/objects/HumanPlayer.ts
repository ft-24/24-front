import Utils from "../lib/Utils";
import Player from "./Player"
import { Direction } from "../lib/Directions";

export namespace Pong {
  export class HumanPlayer extends Player {

    private handleKeydown = (evt: KeyboardEvent) => {
      switch (evt.key) {
        case Utils.KeyCode.UP_ARROW:
        case Utils.KeyCode.UP_ARROW_ALT:
          this.direction = Direction.UP;
          break;
        case Utils.KeyCode.DOWN_ARROW:
        case Utils.KeyCode.DOWN_ARROW_ALT:
          this.direction = Direction.DOWN;
          break;
        default:
          this.direction = Direction.NONE;
        
        
      }
    };

    private handleKeyup = (_: KeyboardEvent) => {
      this.direction = Direction.NONE;
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

export default Pong.HumanPlayer;
