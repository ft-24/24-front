import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
  position: relative;
}
#modal {
  position: fixed;
  top: 0;
}
* {
  --yellow : #ecf700;
  --purple: #8156ff;
  --white: #ffffff;
  --light-light-gray: #cfcfcf;
  --light-gray: #4e4e4e;
  --dark-gray: #1c1c1c;
  --translucent-white: rgba(255, 255, 255, 0.2);

  @font-face {
    font-family: 'NanumSquareR';
    src: url('/fonts/NanumSquareR.otf');
  }

  @font-face {
    font-family: 'NanumSquareL';
    src: url('/fonts/NanumSquareL.otf');
  }

  @font-face {
    font-family: 'NanumSquareB';
    src: url('/fonts/NanumSquareB.otf');
  }

  @font-face {
    font-family: 'SBAggroM';
    src: url('/fonts/SBAggroM.otf');
  }
  
  @font-face {
    font-family: 'SBAggroL';
    src: url('/fonts/SBAggroL.otf');
  }
  
  @font-face {
    font-family: 'SBAggroB';
    src: url('/fonts/SBAggroB.otf');
  }

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--dark-gray);
  color: var(--white);
  font-family: NanumSquareL;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  div,h1,ul,li {
    background: inherit;
    color: inherit;
  }
}
`;

