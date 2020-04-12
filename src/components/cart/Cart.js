import React, { useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../../store';
import { priceAdder } from '../../utils';
import { FullCart } from '../modals/fullCart/FullCart';
import { Modal } from '../modals/Modal';

export const Cart = () => {
  const [{ orders }] = useStore();
  const [isShowing, setIsShowing] = useState(false);
  const cartTotal = priceAdder(orders);

  const onClick = () => {
    setIsShowing(isShowing => !isShowing);
  };

  return (
    <ButtonWrapper>
      <Button onClick={onClick}>
        <span>{orders.length}</span>
        <span>View Cart</span>${cartTotal.toFixed(2)}
      </Button>
      {isShowing ? (<Modal><FullCart onClick={onClick} /></Modal>) : null}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0px;
  padding: 15px 20px;
  z-index: 2;
  background-color: var(--lightborange);
  box-shadow: 0 -1px 4px rgba(0,0,0,.08);
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
  min-width: 200px;
  width: 100%;
  background-color: var(--rust);
  border-radius: 4px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: var(--lightorange);

  span:first-child {
    font-size: 12px;
    padding: 5px;
    line-height: 1.2;
    border-radius: 2px;
    color: var(--lightorange);
    background-color: hsla(0, 0%, 100%, .25);
  }

  span:nth-child(2) {
    position: absolute;
    left: 0;
    right: 0;

  }
`;
