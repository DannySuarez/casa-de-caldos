import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import useCombinedReducers from 'use-combined-reducers';
import customerReducer from '../reducers/customerReducer';
import ordersReducer from '../reducers/ordersReducer';

const customerInfoState = {
  name: '',
  email: '',
  phone: ''
};

const ordersState = [];

export const StateContext = createContext(null);

export const StoreProvider = ({ children }) => {
  
  return (
    <StateContext.Provider
      value={useCombinedReducers({
        customerInformation: useReducer(customerReducer, customerInfoState),
        orders: useReducer(ordersReducer, ordersState)
      })}>
      {children}
    </StateContext.Provider>
  );
};

export const useStore = () => useContext(StateContext);

StoreProvider.propTypes = {
  children: PropTypes.array
};
