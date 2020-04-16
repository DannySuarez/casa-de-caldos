import React from 'react';
import { CartContent, PriceOverview } from './Checkout.styled';
import { Header } from '../header/Header';
import { CustomerInfo } from '../customerForms/CustomerInfo';
import { CartItem } from '../modals/fullCart/CartItem';
import { useStore } from '../../store';

export const Checkout = () => {
  const [{ orders }, dispatch] = useStore();
  const cartItems = orders.map((order, i) => (
    <CartItem order={order} dispatch={dispatch} index={i} key={i} />
  ));

  return (
    <>
      <Header />
      <CustomerInfo/>
      <CartContent>
        {cartItems}
        <PriceOverview>
          <div>
            <h6>Subtotal</h6>
            <h6>total here</h6>
          </div>
        </PriceOverview>
      </CartContent>
    </>
  );
};
