interface GraphicalElement {
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (deltaTime: number) => void;
  x: number;
  y: number;
}

export default GraphicalElement;
