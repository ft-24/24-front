export namespace Pong {

   export enum Colours {
      MENU_BACKGROUND = '#1c1c1c',
      GAME_BACKGROUND = '#000000',
      PITCH_COLOUR = '#FFFFFF',

      TITLE_COLOUR = '#FDF3E7',
      SCORE_COLOUR = '#FFFFFF22',

      BALL_COLOUR = '#EEEEEE',
      PADDLE1_COLOUR = '#8156ff',
      PADDLE2_COLOUR = '#ecf700',
   }

   export enum Text {
      GAME_TITLE = 'Pong!',
      TITLE_SIZE = '60px',
      TITLE_FONT = 'SBAggroM',

      GAME_SUBTITLE = 'Click to play...',
      SUBTITLE_SIZE = '32px',
      RES_SUBTITLE_SIZE = '24px',
      SUBTITLE_FONT = 'NanumSquareL',

      SCORE_SIZE = '60px',
      SCORE_FONT = 'NanumSquareL',
   }

   export enum Game {
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
