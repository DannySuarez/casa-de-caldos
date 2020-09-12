import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './CustomerInfo.styled';
import {
  useCustomerSetStateContext,
  useCustomerStateContext,
} from '../context/CustomerInfoContext';
import { FormInput } from './FormInput';

export const CustomerInfo = ({ setIsActive }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { setName, setEmail, setPhone } = useCustomerSetStateContext();
  const { name, email, phone } = useCustomerStateContext();

  const onEnter = (e) => {
    e.preventDefault();
    setIsDisabled((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  };

  return (
    <Card>
      <h2>Your Information</h2>
      <p>
        <strong>
            No need to sign up for an account! Just fill out some basic info in
            case we need to contact you.
        </strong>
      </p>
      <form onSubmit={onEnter}>
        <FormInput
          label="Full Name"
          id="Full Name"
          name="Full Name"
          type="text"
          required={true}
          value={name}
          disabled={isDisabled}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Email"
          id="Email"
          name="Email"
          type="text"
          required={false}
          value={email}
          disabled={isDisabled}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Phone"
          id="Phone"
          name="Phone"
          type="tel"
          required={true}
          value={phone}
          disabled={isDisabled}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button>{isDisabled ? 'Edit' : 'Continue'}</button>
      </form>
    </Card>
  );
};

CustomerInfo.propTypes = {
  setIsActive: PropTypes.func.isRequired,
};
