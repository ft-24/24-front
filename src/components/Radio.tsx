import styled from "styled-components"

type DynamicColor = {
  color : string,
}

const RadioButton = styled.input`
  align-self: center;
`

const Label= styled.label<DynamicColor>`
  margin: 0.5rem;
  color: ${(props) => (props.color)};
  background: none;
`

const Radio = ({label, color, index, select, handler}: {label: string, color: string, index: number, select: number, handler: any}) => {
  return (
    <>
      <RadioButton 
        type="radio"
        value={index}
        checked={select === index}
        onChange={() => handler(index)} />
      <Label color={color}>{label}</Label>
    </>
  );
}

export default Radio;