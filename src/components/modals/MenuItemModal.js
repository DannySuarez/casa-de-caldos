import React from 'react';
import PropTypes from 'prop-types';
import { ModalForm } from './ModalForm';
import { ModalContent, ModalImage, ModalBody } from './MenuItemModal.styled';
import styled from 'styled-components';

export const MenuItemModal = ({ item, setIsOpen }) => {  
  return (
    <ModalWrapper>
      <div>
        <ModalContent>
          <button onClick={() => setIsOpen(prevState => !prevState)}><i>X</i></button>
          <ModalImage>
            <img src={item.img} />
          </ModalImage>
          <ModalBody>
            <h2>{item.name}</h2>
            <p>{item.mainDescription}</p>
            <ModalForm item={item} />
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

const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1040;
  overflow-x: hidden;
  overflow-y: auto;

  div:first-child {
    transform: translate(0, 0);
    max-width: 484px;
    width: 100%;
    position: relative;

    @media (max-width: 641px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;
