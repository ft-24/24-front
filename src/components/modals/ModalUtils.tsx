import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #00000084;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const ChildrenWrapper = styled.div`
  background: transparent;
`

export type ModalProps = {
  children?: JSX.Element,
  modalHandler: VoidFunction,
}

export const BackDrop = ({children, modalHandler} : ModalProps) => {
  return (
    <Container onClick={modalHandler}>
        <ChildrenWrapper onClick={(e)=>{ e.stopPropagation();}}>
          {children}
        </ChildrenWrapper>
    </Container>
  )
}