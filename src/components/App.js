import React from 'react';
import { GlobalStyles } from '../global';
import { StoreProvider } from '../store';
import CasaDeCaldos from './CasaDeCaldos';

export default function App() {
  return (
    <StoreProvider>
      <GlobalStyles />
      <main>
        <CasaDeCaldos />
      </main>
    </StoreProvider>
  );
}
