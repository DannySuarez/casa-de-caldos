import React from 'react';
import PropTypes from 'prop-types';

export const CutomerMeal = ({ name, price, specialRequest, protein }) => {
  return (
    <tr>
      <td scope="row">{name}</td>
      <td>{protein}</td>
      <td>{specialRequest}</td>
      <td datatype="currency">{price.toFixed(2)}</td>
    </tr>
  );
};

CutomerMeal.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  specialRequest: PropTypes.string,
  protein: PropTypes.string
};
