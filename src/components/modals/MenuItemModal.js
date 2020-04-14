import React from 'react';
import PropTypes from 'prop-types';
import { ModalForm } from './ModalForm';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { 
  ModalWrapper,
  ModalContent,
  ModalImage,
  ModalBody
} from './MenuItemModal.styled';

export const MenuItemModal = ({ item, setIsOpen }) => {  
  useLockBodyScroll();

  return (
    <ModalWrapper>
      <div className="modal-dialog">
        <ModalContent className="model-content">
          <button onClick={() => setIsOpen(prevState => !prevState)}><i>X</i></button>
          <ModalImage>
            <img src={item.img} />
          </ModalImage>
          <ModalBody>
            <h2>{item.name}</h2>
            <p>{item.mainDescription}</p>
            <ModalForm item={item} setIsOpen={setIsOpen} />
          </ModalBody>
        </ModalContent>
      </div>
    </ModalWrapper>
  );
};

MenuItemModal.propTypes = {
  item: PropTypes.object.isRequired,
  setIsOpen: PropTypes.func.isRequired
};
