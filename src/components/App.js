import React from 'react';
import 'normalize.css';
import { GlobalStyles } from '../global';

import { Header } from '../components/header/Header';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}
