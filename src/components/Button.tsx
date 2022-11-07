import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
	size? : string;
  color? : string;
  background? : string;
}

const defaultStyle = css<Props>`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding: 0.25em;
  border-radius: 0.25em;
  border: 1px solid;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  font-size: ${props=> props.size ? `${props.size}rem` : `2rem`};
  background: ${props => props.background ? `var(${"--" + props.background})` : `inherit`};
  color: ${props => props.color ? `var(${"--" + props.color})` : `inherit`};
`

const a = styled.a<Props>`
  ${defaultStyle}
`;

const link = styled(Link)<Props>`
  ${defaultStyle}
`

const button = styled.button<Props>`
  ${defaultStyle}
`

const Button = {
  button : button,
  link : link,
  a : a,
}

export default Button;
