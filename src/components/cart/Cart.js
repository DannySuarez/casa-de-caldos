import React, { useState } from 'react';
import { ButtonWrapper, Button } from './Cart.styled';
import { FullCart } from '../modals/fullCart/FullCart';
import { Modal } from '../modals/Modal';
import { useStore } from '../../store';
import { priceAdder } from '../../utils';

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
