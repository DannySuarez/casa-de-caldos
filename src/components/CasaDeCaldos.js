import React from 'react';
import 'normalize.css';
import { StoreProvider } from '../store/index';

import { Header } from './header/Header';
import { CustomerInfo } from './customerForms/CustomerInfo';
import { Menu } from './menu/Menu';

export default function CasaDeCaldos() {
  return (
    <StoreProvider>
      <Header />
      <CustomerInfo />
      <Menu />
    </StoreProvider>
  );
}
