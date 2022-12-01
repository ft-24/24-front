namespace Utils {

  export function clearScreen(ctx: CanvasRenderingContext2D) {
    let {width, height} = ctx.canvas;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.closePath();
  }

  export function between(x: number, low: number, high: number) {
    return x >= low && x <= high;
  }

  export let KeyCode = {
    ENTER: 'Enter',
    LEFT_ARROW: 'a',
    UP_ARROW: 'w',
    RIGHT_ARROW: 'd',
    DOWN_ARROW: 's',
    UP_ARROW_ALT: 'ㅈ',
    DOWN_ARROW_ALT: 'ㄴ'
  };
}

export default Utils;
