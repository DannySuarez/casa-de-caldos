import React from 'react';
import { useStore } from '../store';
import { Cart } from '../components/cart/Cart';

export const useCart = () => {
  const [orders] = useStore();
  return orders.length >= 1 ? <Cart/> : null;
};
