import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Section } from './CustomerInfo.styled';
import { useCustomerSetStateContext, useCustomerStateContext } from '../context/CustomerInfoContext';

export const CustomerInfo = ({ setIsActive }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { setName, setEmail, setPhone }  = useCustomerSetStateContext();
  const { name, email, phone } = useCustomerStateContext();

  const onEnter = (e) => {
    e.preventDefault();    
    setIsDisabled(prevState => !prevState);
    setIsActive(prevState => !prevState);
  };
  
  return (
    <>
      <Card>
        <h2>Your Information</h2>
        <p>
          <strong>
          No need to sign up for an account!
          Just fill out some basic info in case we need to contact you.
          </strong>
        </p>
        <form onSubmit={onEnter}>
          <Section>
            <label htmlFor="Full Name"><i>*</i>Full Name:</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              id="Full Name"
              name="Full Name"
              disabled={isDisabled}
              required
            />
          </Section>
          <Section>
            <label htmlFor="Email">Email Address:</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text" 
              id="Email"
              name="Email"
              disabled={isDisabled}
            />
          </Section>
          <Section>
            <label htmlFor="Phone"><i>*</i>Phone Number:</label>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              type="tel"
              id="Phone"
              name="Phone"
              placeholder="Phone"
              disabled={isDisabled}
              required
            />
          </Section>
          <button>{ isDisabled ? 'Edit' : 'Continue' }</button>
        </form>
      </Card>
    </>
  );
};

CustomerInfo.propTypes = {
  setIsActive: PropTypes.func.isRequired
};
