export namespace Pong {

   export enum Colours {
      MENU_BACKGROUND = '#1c1c1c',
      GAME_BACKGROUND = '#000000',
      PITCH_COLOUR = '#FFFFFF',

      TITLE_COLOUR = '#FDF3E7',
      SCORE_COLOUR = '#FFFFFF22',

      BALL_COLOUR = '#EEEEEE',
      PADDLE1_COLOUR = '#ecf700',
      PADDLE2_COLOUR = '#8156ff',
   }

   export enum Text {
      GAME_TITLE = 'Arcade!',
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
      FPS = 60,

      // Score needed to win
      WINNING_SCORE = 1,

      // Size of canvas
      CANVAS_WIDTH = 1200,
      CANVAS_HEIGHT = 600,

      // Pixels the players are from the edge
      PLAYER_PADDING = 40,

      // Paddle size
      PADDLE_WIDTH = 20,
      PADDLE_HEIGHT = 80,
      PADDLE_SPEED = 5,

      ENEMY_PADDING = 60,
      ENEMY_WIDTH = 30,
      ENEMY_HEIGHT = CANVAS_HEIGHT,

      BALL_SPEED = 2,
      BALL_SIZE = 8
   }
}

export default Pong;
