import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  --yellow : #ecf700;
  --purple: #8156ff;
  --light-gray: #4e4e4e;
  --dark-gray: #1c1c1c;
  --white: white;

  @font-face {
    font-family: 'NanumSquareL';
    src: url('../public/fonts/NanumSquareL.otf');
  }

  @font-face {
    font-family: 'SBAggroM';
    src: url('../public/fonts/SBAggroM.otf');
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
}
`;

