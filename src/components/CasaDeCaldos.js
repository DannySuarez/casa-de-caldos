import React from 'react';
import 'normalize.css';

import { Header } from './header/Header';
import { CustomerInfo } from './orderForms/CustomerInfo';

export default function CasaDeCaldos() {
  return (
    <>
      <Header />
      <CustomerInfo />
    </>
  );
}
