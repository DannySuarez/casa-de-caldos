import React from 'react';
import PropTypes from 'prop-types';
import { BodyRow, BodyCell } from './CustomerOrders.styled';

export const CustomerMeal = ({ name, price, specialRequest, protein }) => {
  return (
    <BodyRow>
      <BodyCell scope="row">{name}</BodyCell>
      <BodyCell>{protein}</BodyCell>
      <BodyCell>{specialRequest}</BodyCell>
      <BodyCell datatype="currency">${price.toFixed(2)}</BodyCell>
    </BodyRow>
  );
};

CustomerMeal.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  specialRequest: PropTypes.string,
  protein: PropTypes.array
};
