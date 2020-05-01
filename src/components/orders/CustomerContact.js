import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CustomerContact = ({ name, email, phone }) => {
  return (
    <ContactSection>
      <p>Customer Name: {name}</p>
      <p>Customer Email: {email}</p>
      <p>Customer #: {phone}</p>
    </ContactSection>
  );
};

CustomerContact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string.isRequired,
};

const ContactSection = styled.section`
  text-align: center;
`;
