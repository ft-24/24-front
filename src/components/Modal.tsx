import styled from "styled-components";

const BackDrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #00000084;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

const Box = styled.div`
`

const Modal = ({children, modalHandler} : any) => {
  return (
    <BackDrop onClick={modalHandler}>
        <Box onClick={(e)=>{ e.stopPropagation();}}>
          {children}
        </Box>
    </BackDrop>
  )
}

export default Modal
