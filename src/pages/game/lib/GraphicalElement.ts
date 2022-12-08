import PongIO from "./IO";

interface GraphicalElement {
  draw: (ctx: CanvasRenderingContext2D, recvData: PongIO.GameRecvData) => void;
  update: () => void;
  x: number;
  y: number;
}

export default GraphicalElement;
