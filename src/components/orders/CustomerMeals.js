import React from 'react';
import PropTypes from 'prop-types';
import { CustomerMeal } from './CustomerMeal';

export const CustomerMeals = ({ orders }) => {
  const meals = orders.map((meal, i) => {
    return <CustomerMeal key={i} {...meal} />;
  });

  return <>{meals}</>;
};

CustomerMeals.propTypes = {
  orders: PropTypes.array.isRequired,
};
