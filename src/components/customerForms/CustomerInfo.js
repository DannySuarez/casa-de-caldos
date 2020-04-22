import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store';
import { Card, Section } from './CustomerInfo.styled';

export const CustomerInfo = ({ setIsActive }) => {
  const [{ customerInformation: { name, email, phone } }, dispatch] = useStore();  
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonText = isDisabled ? 'Edit' : 'Continue';

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
              onChange={(e) => dispatch({
                type: 'FIELD',
                field: 'name',
                value: e.currentTarget.value
              })}
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
              onChange={(e) => dispatch({
                type: 'FIELD',
                field: 'email',
                value: e.currentTarget.value
              })}
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
              onChange={(e) => dispatch({
                type: 'FIELD',
                field: 'phone',
                value: e.currentTarget.value
              })}
              type="tel"
              id="Phone"
              name="Phone"
              placeholder="Phone"
              disabled={isDisabled}
              required
            />
          </Section>
          <button>{buttonText}</button>
        </form>
      </Card>
    </>
  );
};

CustomerInfo.propTypes = {
  setIsActive: PropTypes.func.isRequired
};
