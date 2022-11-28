export namespace Pong {

   export enum Colours {
      MENU_BACKGROUND = '#7E8F7C',
      GAME_BACKGROUND = '#000000',
      PITCH_COLOUR = '#FFFFFF',

      TITLE_COLOUR = '#FDF3E7',
      SCORE_COLOUR = '#FFFFFF',

      BALL_COLOUR = '#FF0000',
      PADDLE_COLOUR = '#0000FF',
   }

   export enum Text {
      GAME_TITLE = 'Pong!',
      TITLE_SIZE = '60px',
      TITLE_FONT = 'Arial',

      GAME_SUBTITLE = 'Click to play...',
      SUBTITLE_SIZE = '32px',
      SUBTITLE_FONT = 'Arial',

      SCORE_SIZE = '60px',
      SCORE_FONT = 'Arial',
   }

   export enum Game {
      FPS = 60,

      // Score needed to win
      WINNING_SCORE = 5,

      // Size of canvas
      CANVAS_WIDTH = 1200,
      CANVAS_HEIGHT = 600,

      // Pixels the players are from the edge
      PLAYER_PADDING = 40,

      // Paddle size
      PADDLE_WIDTH = 10,
      PADDLE_HEIGHT = 80,
      PADDLE_SPEED = 5,

      BALL_SPEED = 2,
      BALL_SIZE = 8
   }
}

export default Pong;
