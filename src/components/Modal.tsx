import styled from "styled-components";
import Button from "./Button";

const BackDrop = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background: #00000084;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    width: 40%;
    height: 30%;
    background: var(--white);
    color:var(--light-gray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const Modal = ({setIsModalOn} : any) => {
  return (
    <BackDrop onClick={()=>{setIsModalOn(false)}}>
        <Box onClick={(e)=>{ e.stopPropagation();}}>
            Modal
            <div>
            <Button.link to="/matching" onClick={()=>{
            }}>O</Button.link>
            <Button.button onClick={()=>{
            setIsModalOn(false)}}>X</Button.button>
            </div>
        </Box>
    </BackDrop>
  )
}

export default Modal
