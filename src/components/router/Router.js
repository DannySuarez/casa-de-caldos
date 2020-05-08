import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import CasaDeCaldos from '../CasaDeCaldos';
import { Checkout } from '../checkout/Checkout';
import { Thanks } from '../thanks/Thanks';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={CasaDeCaldos} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/thanks" component={Thanks} />
    </Switch>
  );
};

export default Router;
