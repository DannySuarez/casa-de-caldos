import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import CasaDeCaldos from '../CasaDeCaldos';
import { Checkout } from '../checkout/Checkout';
import { Thanks } from '../thanks/Thanks';
import { CustomerOrders } from '../orders/CustomerOrders';
import { SessionProvider } from '../auth/auth';
import { SignIn } from '../login/SignIn';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <SessionProvider>
      <Switch>
        <Route exact path="/" component={CasaDeCaldos} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/vieworders" component={CustomerOrders} />
      </Switch>
    </SessionProvider>
  );
};

export default Router;
