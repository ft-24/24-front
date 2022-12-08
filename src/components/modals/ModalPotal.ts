import ReactDOM from 'react-dom';

export default function ModalPortal({children} : { children : JSX.Element }) {
    const modalElement = document.querySelector("#modal") as HTMLElement;
    return ReactDOM.createPortal(children, modalElement);
  }
  