import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import ordersReducer from '../reducers/ordersReducer';

const ordersState = [];

export const StateContext = createContext(null);

export const StoreProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(ordersReducer, ordersState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStore = () => useContext(StateContext);

StoreProvider.propTypes = {
  children: PropTypes.array,
};
