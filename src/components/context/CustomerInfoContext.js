import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const CustomerInfoContext = createContext(null);
const CustomerInfoStateContext = createContext(null);

export const CustomerInfoProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <CustomerInfoContext.Provider value={{ setName, setEmail, setPhone }}>
      <CustomerInfoStateContext.Provider value={{ name, email, phone }}>
        {children}
      </CustomerInfoStateContext.Provider>
    </CustomerInfoContext.Provider>
  );
};

export const useCustomerSetStateContext = () => useContext(CustomerInfoContext);
export const useCustomerStateContext = () => useContext(CustomerInfoStateContext);

CustomerInfoProvider.propTypes = {
  children: PropTypes.object,
};
