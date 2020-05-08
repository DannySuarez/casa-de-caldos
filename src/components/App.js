import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import { GlobalStyles } from '../global';
import { StoreProvider } from '../store';
import Router from './router/Router';


export default function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <GlobalStyles />
        <main>
          <Router />
        </main>
      </StoreProvider>
    </BrowserRouter>
  );
}
