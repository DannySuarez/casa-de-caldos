import React from 'react';
import 'normalize.css';
import { Header } from './header/Header';
import { Menu } from './menu/Menu';
import { useCart } from '../hooks/useCart';

export default function CasaDeCaldos() { 
  const cart = useCart();

  return (
    <>
      <Header />
      <Menu />
      {cart}
    </>
  );
}
