import React from 'react';
import 'normalize.css';

import { Header } from './header/Header';
import { CustomerInfo } from './customerForms/CustomerInfo';
import { Menu } from './menu/Menu';

export default function CasaDeCaldos() {
  return (
    <>
      <Header />
      <CustomerInfo />
      <Menu />
    </>
  );
}
