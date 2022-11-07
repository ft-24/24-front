import styled, { css } from 'styled-components';

type Props = {
	size? : string;
  color? : string;
  background? : string;
}


const giveSize = css<Props>`
  ${props => props.size ? `${props.size}rem` : '2rem'};
  `

const halfSize = css<Props>`
  ${props => props.size ? `${parseInt(props.size) / 2}rem` : '1rem'};
  `

  const defaultStyle = css<Props>`
    border-radius: 50%;
    width: ${giveSize};
    height: ${giveSize};
    `

const img = styled.img<Props>`
  ${defaultStyle};
  vertical-align: middle;
`

const txt = styled.div<Props>`
  ${defaultStyle};
  font-size: ${halfSize};
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${props => props.background ? `var(${"--" + props.background})` :
   `var(${"--white"})`};
  color: ${props => props.color ? `var(${"--" + props.color})` :
   `var(${"--dark-gray"})`};
`

const Avatar = {
  img : img,
  txt : txt,
}

export default Avatar;
