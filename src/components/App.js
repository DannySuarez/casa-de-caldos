import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { GlobalStyles } from '../global';
import { StoreProvider } from '../store';
import CasaDeCaldos from './CasaDeCaldos';
import { Checkout } from './checkout/Checkout';
import { Thanks } from './thanks/thanks';

export default function App() {
  return (
    <Router>
      <Switch>
        <StoreProvider>
          <GlobalStyles />
          <main>
            <Route exact path="/" component={CasaDeCaldos} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/thanks" component={Thanks} />
          </main>
        </StoreProvider>
      </Switch>
    </Router>
  );
}
