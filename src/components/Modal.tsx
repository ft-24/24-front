import styled from "styled-components";

const Wrapper = styled.div`
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
    <Wrapper onClick={modalHandler}>
        <Box onClick={(e)=>{ e.stopPropagation();}}>
          {children}
        </Box>
    </Wrapper>
  )
}

export default Modal
