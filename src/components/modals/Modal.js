import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children }) => {
  const modalRef = useRef(null);

  if(!modalRef.current) {
    const div = document.createElement('div');
    modalRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(modalRef.current);

    return () => modalRoot.removeChild(modalRef.current);
  }, []);

  return createPortal(children, modalRef.current);
};
